import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteListDirective } from './infinite-list.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [InfiniteListDirective],
  declarations: [InfiniteListDirective]
})
export class InfiniteListModule { }
