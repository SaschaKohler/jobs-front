import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponentComponent } from './job-component/job-component.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'jobs/:jobId', component:JobComponentComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: false})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
