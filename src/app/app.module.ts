import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddLogComponent } from './pages/add-log/add-log.component';
import { LogsSummaryComponent } from './pages/logs-summary/logs-summary.component';
import { LogsOverviewComponent } from './pages/logs-overview/logs-overview.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormInputComponent } from './components/form-input/form-input.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddLogComponent,
    LogsSummaryComponent,
    LogsOverviewComponent,
    HeaderComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    SliderModule,
    CalendarModule,
    CheckboxModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
