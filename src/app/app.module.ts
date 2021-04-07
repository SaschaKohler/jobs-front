import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { JobsService } from './jobs.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    CommonModule,
    FormsModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    AppRoutingModule,
    
  ],
  providers: [
    JobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
