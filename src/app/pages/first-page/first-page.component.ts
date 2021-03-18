import { Component, OnInit } from '@angular/core';
import { ProgressiveWebAppService } from '../../services/progressive-web-app/progressive-web-app.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  
  constructor(
    public progressiveWebAppService : ProgressiveWebAppService
    ){}
    
    ngOnInit(): void {
    }
    
    installProgressiveWebApp(): void {
      this.progressiveWebAppService.promptEvent.prompt();
    }
    
    
  }
  