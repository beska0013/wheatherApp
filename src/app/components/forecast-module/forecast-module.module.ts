import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastModuleRoutingModule } from './forecast-module-routing.module';
import { ForecastModuleComponent } from './forecast-module.component';


@NgModule({
  declarations: [
    ForecastModuleComponent
  ],
  imports: [
    CommonModule,
    ForecastModuleRoutingModule
  ]
})
export class ForecastModuleModule { }
