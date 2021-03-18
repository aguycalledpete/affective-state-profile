import { Component, OnInit } from '@angular/core';
import { faChartBar, faPlus, faTable } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faChartBar = faChartBar;
  faTable = faTable;
  faPlus = faPlus;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
