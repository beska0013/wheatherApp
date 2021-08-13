import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastModuleComponent } from './forecast-module.component';

const routes: Routes = [{ path: '', component: ForecastModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastModuleRoutingModule { }
