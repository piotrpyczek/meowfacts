import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeowfactsComponent } from './meowfacts.component';
import { RouterModule, Routes } from '@angular/router';
import { InfiniteListModule } from '../common';


const routes: Routes = [
  {
    path: '',
    component: MeowfactsComponent
  }
];


@NgModule({
  declarations: [
    MeowfactsComponent
  ],
  imports: [
    CommonModule,
    InfiniteListModule,
    RouterModule.forChild(routes)
  ]
})
export class MeowfactsModule { }
