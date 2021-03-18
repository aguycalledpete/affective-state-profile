import { Component, Input, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { ProgressiveWebAppService } from '../../services/progressive-web-app/progressive-web-app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  
  @Input() Title = '';  
  
  constructor(
    public progressiveWebAppService : ProgressiveWebAppService
    ) {}
    
    ngOnInit(): void {
    }
    
    installProgressiveWebApp(): void {
      this.progressiveWebAppService.promptEvent.prompt();
    }
    
  }
  