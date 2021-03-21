import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventLogDto } from 'src/app/dtos/event-log-dto';
import { LabelValueDto } from 'src/app/dtos/label-value-dto';
import { DataStoreService } from 'src/app/services/data-store/data-store.service';

@Component({
  templateUrl: './logs-overview.component.html',
  styleUrls: ['./logs-overview.component.css']
})
export class LogsOverviewComponent implements OnInit, OnDestroy {
  
  readonly TimesOfTheDay = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  ChartData: any;
  ChartOptions: any;
  Dates = new Array<LabelValueDto>();
  SelectedDate: LabelValueDto;
  Logs: EventLogDto[];
  Subscriptions = new Array<Subscription>();
  IsPageLoaded: boolean;
  
  constructor(public dataStore: DataStoreService) {}
  
  ngOnDestroy(): void {
    this.Subscriptions.forEach(sub => sub.unsubscribe());
  }
  
  ngOnInit(): void {
    this.Subscriptions.push(
      this.dataStore.getLogs().subscribe(_logs => {
        this.Logs = _logs;
        if(this.Logs.length !== 0){
          // sort logs by date
          this.Logs.sort((a, b) => b.DateTime.getTime() - a.DateTime.getTime());
          
          this.setDateDropdown();
          this.setChartOptions();
          this.setChartData();
        }
        this.IsPageLoaded = true;
      }));
    }
    
    setDateDropdown(){
      // add log dates to dropdown
      this.Logs.forEach(log => {
        const dateString = log.DateTime.toLocaleDateString();
        if(this.Dates.some(date => date.name === dateString)) {
          return;
        }
        const labelValue = new LabelValueDto();
        labelValue.name = dateString;
        labelValue.code = dateString;
        this.Dates.push(labelValue);
      });
      
      if(!this.SelectedDate){
        const currentDate = new Date();
        const matchedDate = this.Dates.find(date => date.name === currentDate.toLocaleDateString());
        this.SelectedDate = matchedDate ?? this.Dates[0];
      }
    }
    
    setChartData(){
      this.ChartData = {
        labels: this.TimesOfTheDay,
        datasets: [
          {
            label: 'Valence',
            data: this.getData(true),
            fill: false,
            borderColor: '#42A5F5'
          },
          {
            label: 'Arousal',
            data: this.getData(false),
            fill: false,
            borderColor: '#FFA726'
          }
        ]
      }
    }
    
    getData(isValence: boolean): number[] {
      let data = new Array<number>();
      
      const selectedDateLogs = this.Logs.filter(log => log.DateTime.toLocaleDateString() === this.SelectedDate.name);
      
      this.TimesOfTheDay.forEach(time => {
        const logsForTime = selectedDateLogs.filter(log => log.DateTime.getHours().toString() === time);
        
        if(logsForTime.length !== 0){
          logsForTime.forEach(log => data.push(isValence ? log.ValenceLevel : log.ArousalLevel))
        }else{
          data.push(0);
        }
      });
      
      return data;
    }
    
    setChartOptions(){
      this.ChartOptions = {
        legend: {
          labels: {
            fontColor: '#495057'
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              fontColor: '#495057'
            }
          }],
          yAxes: [{
            ticks: {
              fontColor: '#495057'
            }
          }]
        }
      };
    }
    
    dateChanged(){
      this.setChartData();
    }
  }
  
  