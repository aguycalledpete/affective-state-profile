import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store/data-store.service';

@Component({
  templateUrl: './logs-summary.component.html',
  styleUrls: ['./logs-summary.component.css']
})
export class LogsSummaryComponent implements OnInit {
  
  constructor(
    private dataStore: DataStoreService
    ) { 
      this.dataStore.reloadLogs();
    }
    
    ngOnInit(): void {
    }
    
  }
  