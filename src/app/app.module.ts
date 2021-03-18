import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddLogComponent } from './pages/add-log/add-log.component';
import { LogsSummaryComponent } from './pages/logs-summary/logs-summary.component';
import { LogsOverviewComponent } from './pages/logs-overview/logs-overview.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    DataDisplayComponent,
    DashboardComponent,
    AddLogComponent,
    LogsSummaryComponent,
    LogsOverviewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
