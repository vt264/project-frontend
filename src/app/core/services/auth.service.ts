import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  constructor (private http: HttpClient) {}

  login(rut: String, password: String): Observable<any> {
    return this.http
      .post<Usuario>(environment.API_URL + '/api/auth/login', { rut: rut, password: password });
  }
}