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
      // get local storage value and assign to variable 
      this.storage.get('labels').subscribe((labels: Array<String>) => {
        //if local storage does not contain value, set one
        if(!labels) { 
          this.storage.set('labels', this.labels).subscribe(() => {});
          return;
        }
        this.labels = labels;
      });
    }
    
    getLabels(): Array<String>{
      return this.labels;
    }
    
    pushLabel(label: string):void{
      // update variable and push new variable value to local storage
      this.labels.push(label);
      this.storage.set('labels', this.labels).subscribe(() => {});
    }
    
    popLabel(): void{
      if(this.labels.length > 0){
        // update variable and push new variable value to local storage
        this.labels.pop();        
        this.storage.set('labels', this.labels).subscribe(() => {});
      }
    }
    
  }
  