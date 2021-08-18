import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Destinatario } from '../models/destinatario';

@Injectable({
  providedIn: 'root'
})
export class DestinatarioService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    return this.httpClient.get(environment.API_URL + '/api/dashboard/destinatario');
  }

  save(destinatario: Destinatario): Observable<any> {
    return this.httpClient.post(environment.API_URL + '/api/dashboard/destinatario',destinatario);
  }
}
