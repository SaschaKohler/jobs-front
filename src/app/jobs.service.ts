import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Job } from 'src/model/Job';


const JOBS_PER_PAGE = 10;

@Injectable()
export class JobsService {

  constructor(private http: HttpClient) { }

  list(search :string = ''): Observable<Job[]> {
    const searchParameters = search ? `${encodeURIComponent(search)}` : '';
    return this.http.get<Job[]>(
      `${environment.api_base_url}/jobs/` + searchParameters);
  }

  getallJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${environment.api_base_url}/jobs`);
  }

  fetch(id: string): Observable<Job> {
    return this.http.get<Job>(`${environment.api_base_url}/jobs/${id}`);
  }


}

