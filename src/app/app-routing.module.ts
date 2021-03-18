import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';

const routes: Routes =[
  {
    path:'',
    pathMatch: "full",
    redirectTo:'first-page'
  },
  {
    path:'first-page',
    component: FirstPageComponent
  },
  {
    path:'second-page',
    component: SecondPageComponent
  },
  {
    path:'**',
    redirectTo:'first-page'
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
