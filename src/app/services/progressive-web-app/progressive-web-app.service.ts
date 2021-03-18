import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class ProgressiveWebAppService {
  promptEvent: any;
  
  constructor(
    private swUpdate: SwUpdate
    ) { 
      window.addEventListener('beforeinstallprompt', event => {
        this.promptEvent = event;
      });
      
      swUpdate.available.subscribe(event => {
        if (confirm('Would you like to update to the latest version now?')) {
          window.location.reload();
        }
      })
    }
    
  }
  