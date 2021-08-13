import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';






const routes: Routes = [
  { path: '',redirectTo:'today',pathMatch: 'full'},
  { path: 'forecast', loadChildren: () => import('./components/forecast-module/forecast-module.module').then(m => m.ForecastModuleModule) },
  { path: 'today', loadChildren: () => import('./components/today-module/today-module.module').then(m => m.TodayModuleModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
