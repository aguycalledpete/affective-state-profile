import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { EventLogDto } from 'src/app/dtos/event-log-dto';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  
  private EventLogCollection = new Array<EventLogDto>();  
  
  constructor(
    private storage: StorageMap
    ) { }
    
    reloadLogs() {
      // get local storage value and assign to variable 
      this.storage.get('EventLogCollection').subscribe((storedEventLogs: Array<EventLogDto>) => {
        //if local storage does not contain value, set one
        if(!storedEventLogs) { 
          this.storage.set('EventLogCollection', this.EventLogCollection).subscribe(() => {});
          return;
        }
        this.EventLogCollection = storedEventLogs;
        console.log(this.EventLogCollection);
      });
    }
    
    getLogs(): Array<EventLogDto>{
      return this.EventLogCollection;
    }
    
    addLog(eventLog: EventLogDto):void{
      // update variable and push new variable value to local storage
      this.EventLogCollection.push(eventLog);
      this.storage.set('EventLogCollection', this.EventLogCollection).subscribe(() => {});
    }
    
    dump(){
      this.storage.clear().subscribe(() => {});
    }
    
  }
  