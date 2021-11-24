import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from 'src/app/pages/guests/interfaces/guest';
import { environment } from 'src/environments/environment';
import { HttpResponse } from './interfaces/http-pattern';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(id: number): Observable<HttpResponse<Guest>> {

    return this.httpClient.get<HttpResponse<Guest>>(environment.api + 'hospede/' + id)

  }

  list(): Observable<HttpResponse<Guest[]>> {

    return this.httpClient.get<HttpResponse<Guest[]>>(environment.api + 'hospede')

  }

  post(guest: Guest) {

    delete guest.idHospede
    delete guest.created_at
    delete guest.updated_at

    return this.httpClient.post(environment.api + 'hospede', guest)

  }

  put(guest: Guest) {

    return this.httpClient.put(environment.api + 'hospede/' + guest.idHospede as string, guest)

  }

  delete(id: number) {

    return this.httpClient.delete(environment.api + 'hospede/' + id)

  }

}
