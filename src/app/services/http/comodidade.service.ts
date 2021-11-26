import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpResponse } from './interfaces/http-pattern';

@Injectable({
  providedIn: 'root'
})
export class ComodidadeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<HttpResponse<any[]>> {

    return this.httpClient.get<HttpResponse<any[]>>(environment.api + 'comodidade')

  }

  post(data: any): Observable<HttpResponse<any[]>> {

    const { nome, descricao } = data

    return this.httpClient.post<HttpResponse<any[]>>(environment.api + 'comodidade', { nome, descricao })

  }

  delete(idComodidade: any): Observable<HttpResponse<any[]>> {

    return this.httpClient.delete<HttpResponse<any[]>>(environment.api + 'comodidade/' + idComodidade)

  }

  put(data: any): Observable<HttpResponse<any[]>> {

    const { nome, descricao, idComodidade } = data

    return this.httpClient.put<HttpResponse<any[]>>(environment.api + 'comodidade/' + idComodidade, { nome, descricao, idComodidade })

  }

}
