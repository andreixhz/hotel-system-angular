import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpResponse } from './interfaces/http-pattern';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<HttpResponse<any[]>> {

    return this.httpClient.get<HttpResponse<any[]>>(environment.api + 'servico')


  }
  post(service: any) {

    delete service.idServico
    delete service.created_at
    delete service.updated_at

    return this.httpClient.post(environment.api + 'servico', service)

  }

  put(service: any) {

    return this.httpClient.put(environment.api + 'servico/' + service.idServico as string, service)

  }


  get(id: number): Observable<HttpResponse<any>> {

    return this.httpClient.get<HttpResponse<any>>(environment.api + 'servico/' + id)

  }

  delete(id: number) {

    return this.httpClient.delete(environment.api + 'servico/' + id)

  }


}
