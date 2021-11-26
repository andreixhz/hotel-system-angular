import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpResponse } from './interfaces/http-pattern';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private httpClient: HttpClient
  ) { }


  get(id: number): Observable<HttpResponse<any>> {

    return this.httpClient.get<HttpResponse<any>>(environment.api + 'quarto/' + id)

  }

  list(): Observable<HttpResponse<any[]>> {

    return this.httpClient.get<HttpResponse<any[]>>(environment.api + 'quarto')

  }

  post(quarto: any) {

    let { nome, descricao, valorDiaria, comodidades, numero } = quarto;

    numero = parseInt(numero)
    comodidades = comodidades.map((c) => ({ idComodidade: c.idComodidade }))

    return this.httpClient.post(environment.api + 'quarto', { nome, descricao, valorDiaria, comodidades, numero })

  }

  put(quarto: any) {

    let { nome, descricao, valorDiaria, comodidades, numero, created_at, updated_at, idQuarto } = quarto;

    numero = parseInt(numero)
    comodidades = comodidades.map((c) => ({ idComodidade: c.idComodidade }))

    return this.httpClient.put(environment.api + 'quarto/' + quarto.idQuarto as string, { nome, descricao, valorDiaria, comodidades, numero, created_at, updated_at, idQuarto })

  }

  delete(id: number) {

    return this.httpClient.delete(environment.api + 'quarto/' + id)

  }

}
