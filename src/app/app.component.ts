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
  searchstring: string;
  loading: boolean;
  jobs: Job[] = [];

  constructor( private jobsService: JobsService) {}

  ngOnInit() {

  }

  previousPage

  fetchJobs() {
    this.loading = true;
    this.jobsService.list(this.page, this.searchstring).subscribe(
      (jobs) => {
        this.jobs = jobs;
        this.loading = false;
      }
    )
  }
}
