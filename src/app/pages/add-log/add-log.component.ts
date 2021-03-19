import { Component, OnInit } from '@angular/core';
import { EventLogDto } from 'src/app/dtos/event-log-dto';

@Component({
  templateUrl: './add-log.component.html',
  styleUrls: ['./add-log.component.css']
})
export class AddLogComponent implements OnInit {
  
  EventLog :EventLogDto;
  UseCurrentDate = true;
  UseCurrentTime = true;
  CurrentDate : Date;
  
  constructor() { }
  
  ngOnInit(): void {
    this.EventLog = new EventLogDto();
    this.CurrentDate = new Date()
    this.updateCurrentDate();
  }
  
  async updateCurrentDate() {
    while (true) {
      this.CurrentDate = new Date();
      if(this.UseCurrentDate){
        this.EventLog.Date = this.CurrentDate;
      }
      if(this.UseCurrentTime){
        this.EventLog.Time = this.CurrentDate;
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  addLog(): void {
    if (this.isLogValid()) {
    }
  }
  
  isLogValid(): Boolean {
    if(this.EventLog.Title){
    }
    
    return false;
  }
  
}
