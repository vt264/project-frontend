import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Destinatario } from '../models/destinatario';
import { Transferencia } from '../models/transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    return this.httpClient.get(environment.API_URL + '/api/dashboard/transferencia');
  }

  save(transferencia: Transferencia): Observable<any> {
    return this.httpClient.post(environment.API_URL + '/api/dashboard/transferencia',transferencia);
  }
}
