import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { EventLogDto } from 'src/app/dtos/event-log-dto';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  
  private eventLogCollection: Observable<Array<EventLogDto>>;
  private eventLogCollectionSubject: BehaviorSubject<Array<EventLogDto>>;
  
  constructor(
    private storage: StorageMap
    ) { 
      this.eventLogCollectionSubject = new BehaviorSubject<Array<EventLogDto>>(new Array<EventLogDto>());
      this.eventLogCollection = this.eventLogCollectionSubject.asObservable();
    }
    
    reloadLogs() {
      // get local storage value and assign to variable 
      this.storage.get('EventLogCollection').subscribe((storedEventLogs: Array<EventLogDto>) => {
        //if local storage does not contain value, set one
        if(!storedEventLogs) { 
          this.storage.set('EventLogCollection', this.eventLogCollectionSubject.value).subscribe(() => {});
          return;
        }
        this.eventLogCollectionSubject.next(storedEventLogs);
      });
    }
    
    getLogs(): Observable<Array<EventLogDto>>{
      return this.eventLogCollection;
    }
    
    addLog(eventLog: EventLogDto):void{
      // update variable and push new variable value to local storage
      const newLogs = this.eventLogCollectionSubject.value;
      newLogs.push(eventLog);
      this.eventLogCollectionSubject.next(newLogs);
      this.storage.set('EventLogCollection', newLogs).subscribe(() => {});
    }
    
    dump(){
      this.storage.clear().subscribe(() => {});
    }
    
  }
  