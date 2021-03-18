import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  
  private labels = new Array<String>();  
  
  constructor(
    private storage: StorageMap
    ) { 
      this.storage.get('labels').subscribe((labels:Array<String>) => {
        this.labels = labels;
      });
    }
    
    getLabels():Array<String>{
      return this.labels;
    }
    
    pushLabel(label :string):void{
      this.labels.push(label);
      this.storage.set('labels', this.labels).subscribe(() => {});
    }
    
    popLabel():void{
      if(this.labels.length >0){
        this.labels.pop();
        this.storage.set('labels', this.labels).subscribe(() => {});
      }
    }
    
  }
  