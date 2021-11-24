import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from 'src/app/pages/guests/interfaces/guest';
import { environment } from 'src/environments/environment';
import { HttpResponse } from './interfaces/http-pattern';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  constructor(
    private httpClient: HttpClient
  ) { }

  get(id: number): Observable<HttpResponse<any>> {

    return this.httpClient.get<HttpResponse<any>>(environment.api + 'funcionario/' + id)

  }

  list(): Observable<HttpResponse<any[]>> {

    return this.httpClient.get<HttpResponse<any[]>>(environment.api + 'funcionario')

  }

  post(guest: any) {

    delete guest.idFuncionario
    delete guest.created_at
    delete guest.updated_at
    guest.idOcupacao = guest.idOcupacao.value

    return this.httpClient.post(environment.api + 'funcionario', guest)

  }

  put(guest: any) {

    return this.httpClient.put(environment.api + 'funcionario/' + guest.idFuncionario as string, guest)

  }

  delete(id: number) {

    return this.httpClient.delete(environment.api + 'funcionario/' + id)

  }
}
