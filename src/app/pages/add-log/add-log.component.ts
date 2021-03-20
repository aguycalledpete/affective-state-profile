import { Component, OnInit } from '@angular/core';
import { faMinus, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { EventLogDto } from 'src/app/dtos/event-log-dto';
import { DataStoreService } from 'src/app/services/data-store/data-store.service';

@Component({
  templateUrl: './add-log.component.html',
  styleUrls: ['./add-log.component.css']
})
export class AddLogComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  faSpinner = faSpinner;
  
  EventLog: EventLogDto;
  ShowValidation: boolean;
  IsInvalidTime: boolean;
  UseCurrentDate = true;
  UseCurrentTime = true;
  CurrentDate: Date;
  
  InputDate = new Date();
  InputTime = new Date();
  
  constructor(
    private dataStore: DataStoreService
    ) { 
      this.dataStore.reloadLogs();
    }
    
    ngOnInit(): void {
      this.EventLog = new EventLogDto();
      this.CurrentDate = new Date()
      this.updateCurrentDate();
    }
    
    async updateCurrentDate() {
      while (true) {
        this.CurrentDate = new Date();
        if(this.UseCurrentDate){
          this.InputDate = this.CurrentDate;
        }
        if(this.UseCurrentTime){
          this.InputTime = this.CurrentDate;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    updateValenceLevel(isIncrease: boolean){
      if(isIncrease && this.EventLog.ValenceLevel != 10){
        this.EventLog.ValenceLevel++;
      }else if(!isIncrease && this.EventLog.ValenceLevel != 0){
        this.EventLog.ValenceLevel--;
      }
    }
    
    updateArousalLevel(isIncrease: boolean){
      if(isIncrease && this.EventLog.ArousalLevel != 10){
        this.EventLog.ArousalLevel++;
      }else if(!isIncrease && this.EventLog.ArousalLevel != 0){
        this.EventLog.ArousalLevel--;
      }
    }
    
    async addLog() {
      if (!this.isLogValid()) {
        alert("A validation error occurred. Please check the event details are correct.");
        return;
      }
      this.dataStore.addLog(this.EventLog);
      alert("Event has been successfully logged.");
      window.location.reload();
    }
    
    isLogValid(): Boolean {
      this.ShowValidation = true;
      
      if(!this.EventLog.Title){
        return false;
      }
      
      if(!this.InputDate || !this.InputTime){
        return false;
      }
      
      if(this.EventLog.ValenceLevel > 10 || this.EventLog.ValenceLevel < 0){
        return false;
      }
      
      if(this.EventLog.ArousalLevel > 10 || this.EventLog.ArousalLevel < 0){
        return false;
      }
      
      this.EventLog.DateTime = this.InputDate;
      this.EventLog.DateTime.setHours(this.InputTime.getHours());
      this.EventLog.DateTime.setMinutes(this.InputTime.getMinutes());
      this.EventLog.DateTime.setSeconds(this.InputTime.getSeconds());
      
      this.IsInvalidTime = this.EventLog.DateTime.getTime() > this.CurrentDate.getTime();
      if(this.IsInvalidTime){
        return false;
      }
      
      return true;
    }
    
  }
  