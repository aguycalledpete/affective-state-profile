import { Component, OnInit } from '@angular/core';
import { faChartLine, faPlus, faTable, faTrash } from '@fortawesome/free-solid-svg-icons';
import { DataStoreService } from 'src/app/services/data-store/data-store.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faTrash = faTrash;
  faChartLine = faChartLine;
  faTable = faTable;
  faPlus = faPlus;
  
  constructor(
    private dataStore: DataStoreService
    ) { }
    
    ngOnInit(): void {
    }
    
    clearAllData(){
      if(confirm('This action will delete all stored data and reload this application. Are you sure you want to continue?')){
        this.dataStore.dump();
        alert('Any stored data has been successfully removed. This page is now being reloaded.');
        window.location.reload();
      }
    }
    
  }
  