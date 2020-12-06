import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReleaseInfoComponent } from './release-info/release-info.component';


const routes: Routes = [
  { path:"" , component:ProjectsComponent },
  { path:"home" , component:HomeComponent },
  { path:"home/:key" , component:ReleaseInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
