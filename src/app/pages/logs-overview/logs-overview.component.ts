import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store/data-store.service';

@Component({
  templateUrl: './logs-overview.component.html',
  styleUrls: ['./logs-overview.component.css']
})
export class LogsOverviewComponent implements OnInit {

  constructor(
    private dataStore: DataStoreService
  ) { 
    dataStore.reloadLogs();
  }

  ngOnInit(): void {
  }

}
