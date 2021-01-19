import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolldieComponent } from './rolldie/rolldie.component';

const routes: Routes = [

  { path:'rolldie',component:RolldieComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
 export const routingComponents = [RolldieComponent];
