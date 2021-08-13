import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayModuleComponent } from './today-module.component';

const routes: Routes = [{ path: '', component: TodayModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodayModuleRoutingModule { }
