import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddLogComponent } from './pages/add-log/add-log.component';
import { LogsSummaryComponent } from './pages/logs-summary/logs-summary.component';
import { LogsOverviewComponent } from './pages/logs-overview/logs-overview.component';

const routes: Routes =[
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'add-log',
    component: AddLogComponent
  },
  {
    path:'summary',
    component: LogsSummaryComponent
  },
  {
    path:'overview',
    component: LogsOverviewComponent
  },
  {
    path:'**',
    redirectTo: 'dashboard'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
