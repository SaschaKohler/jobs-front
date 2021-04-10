import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Job } from 'src/model/Job';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-component',
  templateUrl: './job-component.component.html',
  styleUrls: ['./job-component.component.css']
})
export class JobComponentComponent implements OnInit, OnDestroy {

  api_base_url: string = environment.api_base_url;
  is_loading: boolean;
  job: Job;
  routeSubscription: Subscription;

  constructor(private jobsService: JobsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription =this.route.paramMap
    .subscribe( 
      paramMap => { 
        this.is_loading = true;
      this.jobsService.fetch(paramMap.get('jobId'))
      .subscribe(
        (job) =>{
          this.job = job;
          this.is_loading=false;
          }
        )
      });

  }

ngOnDestroy(): void {}

}
