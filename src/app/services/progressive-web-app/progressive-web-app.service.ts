import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class ProgressiveWebAppService {
  promptEvent: any;
  IsInstalled: boolean;
  
  constructor(
    private swUpdate: SwUpdate
    ) { 
      window.addEventListener('beforeinstallprompt', event => {
        this.promptEvent = event;
      });

      window.addEventListener('appinstalled', (evt) => {
        this.IsInstalled = true;
      });
      
      swUpdate.available.subscribe(event => {
        if (confirm('There is a new version available to download, would you like to do this now? (You will be automatically updated when you next reload)')) {
          window.location.reload();
        }
      })
    }
    
  }
  