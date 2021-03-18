import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store/data-store.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  
  constructor(
    public dataStoreService:DataStoreService
    ) { }
    
    ngOnInit(): void {
    }
    
    addLabel():void {
      this.dataStoreService.labels.push('label');
    }
    
    dropLabel():void {
      this.dataStoreService.labels.pop();
    }
    
  }
  