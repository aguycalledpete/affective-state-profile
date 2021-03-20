import { Component, OnInit } from '@angular/core';
import { EventLogDto } from 'src/app/dtos/event-log-dto';
import { LabelValueDto } from 'src/app/dtos/label-value-dto';
import { DataStoreService } from 'src/app/services/data-store/data-store.service';

@Component({
  templateUrl: './logs-overview.component.html',
  styleUrls: ['./logs-overview.component.css']
})
export class LogsOverviewComponent implements OnInit {
  
  TimesOfTheDay = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  ChartData: any;
  ChartOptions: any;
  Dates = new Array<LabelValueDto>();
  SelectedDate: LabelValueDto;
  private logs: EventLogDto[];
  
  constructor(
    private dataStore: DataStoreService
    ) { 
      this.dataStore.reloadLogs();
    }
    
    ngOnInit(): void {
      this.dataStore.getLogs().subscribe(_logs => {
        this.logs = _logs;
        this.setDateDropdown();
        this.setChartOptions();
        this.setChartData();
      });
    }
    
    setDateDropdown(){
      // sort logs by date
      this.logs.sort((a, b) => b.DateTime.getTime() - a.DateTime.getTime());
      // add log dates to dropdown
      this.logs.forEach(log => {
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
            data: this.getYAxis(true),
            fill: false,
            borderColor: '#42A5F5'
          },
          {
            label: 'Arousal',
            data: this.getYAxis(false),
            fill: false,
            borderColor: '#FFA726'
          }
        ]
      }
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
    
    getXAxis(): string[] {
      const result = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'February', 'March', 'April', 'May', 'June', 'July'];
      return result;
    }
    
    getYAxis(isValence: boolean): number[] {
      let result = [65, null, null, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40];
      if(isValence){
        result = [65,  81, 56, 55, 40, null, 59, 80, 81, null, 56, 55, 40];
      }
      return result;
    }
    
  }
  
  