import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Micro1Component } from './private/micro1/micro1.component';
import { Micro2Component } from './private/micro2/micro2.component';
import { Micro3Component } from './private/micro3/micro3.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: "micro1", component: Micro1Component, canActivate: [AuthGuard] },
  { path: "micro2", component: Micro2Component, canActivate: [AuthGuard] },
  { path: "micro3", component: Micro3Component, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
