import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";

import {PostDetailComponent} from "./components/post-detail/post-detail.component";
import {HomeComponent} from "./components/home/home.component";

const routes:Routes = [
  {
    path:"",
    redirectTo:"/dashboard",
    pathMatch:"full"
  },
    {
    path:"posts/:id",
    component:PostDetailComponent
  },
   {
    path:"dashboard",
    component:HomeComponent
  },

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
