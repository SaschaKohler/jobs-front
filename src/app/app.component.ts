import { Component, OnInit } from '@angular/core';
import { Job } from 'src/model/Job';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'jobs-front';

  page: number;
  searchString: string = '';
  loading: boolean;
  jobs: Job[] = [];

  constructor( private jobsService: JobsService) {}

  ngOnInit() {
  
    //this.fetchJobs();
    this.jobsService.getallJobs().subscribe(
      (jobs) =>{
      this.jobs =jobs;
      });
  }

  

  submitSearch() {
    this.fetchJobs();
  }

  fetchJobs() {
    this.loading = true;
    this.jobsService.list(this.searchString).subscribe(
      (jobs) => {
        this.jobs = jobs;
        this.loading = false;
      }
    )
  
  }
}
