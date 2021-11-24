import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpResponse } from './interfaces/http-pattern';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<HttpResponse<any[]>> {

    return this.httpClient.get<HttpResponse<any[]>>(environment.api + 'ocupacao')

  }
}
