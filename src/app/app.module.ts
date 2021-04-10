import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { JobsService } from './jobs.service';
import { AppRoutingModule } from './app-routing.module';
import { JobComponentComponent } from './job-component/job-component.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponentComponent
   
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    CommonModule,
    FormsModule,
  
    AppRoutingModule,
    
  ],
  providers: [
    JobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
