import { Component, OnDestroy, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { EventLogDto } from 'src/app/dtos/event-log-dto';
import { LabelValueDto } from 'src/app/dtos/label-value-dto';
import { DataStoreService } from 'src/app/services/data-store/data-store.service';

@Component({
  templateUrl: './logs-summary.component.html',
  styleUrls: ['./logs-summary.component.css']
})
export class LogsSummaryComponent implements OnInit, OnDestroy {
  faExternalLinkAlt = faExternalLinkAlt
  Subscriptions = new Array<Subscription>();
  Logs: EventLogDto[];
  LogsForDate: EventLogDto[];
  Dates = new Array<LabelValueDto>();
  SelectedDate: LabelValueDto;
  DisplayModal: boolean;
  SelectedLog: EventLogDto;
  IsPageLoaded: boolean;
  
  constructor(
    public dataStore: DataStoreService
    ) { }
    
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
            this.setLogsForDate();
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
      
      setLogsForDate(){
        this.LogsForDate = this.Logs.filter(log => log.DateTime.toLocaleDateString() === this.SelectedDate.name);
      }
      
      dateChanged(){
        this.setLogsForDate();
      }
      
      showModalDialog(log: EventLogDto){
        this.SelectedLog = log;        
        this.DisplayModal = true;
      }
    }
    