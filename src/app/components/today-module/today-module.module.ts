import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodayModuleRoutingModule } from './today-module-routing.module';
import { TodayModuleComponent } from './today-module.component';


@NgModule({
  declarations: [
    TodayModuleComponent
  ],
  imports: [
    CommonModule,
    TodayModuleRoutingModule
  ]
})
export class TodayModuleModule { }
