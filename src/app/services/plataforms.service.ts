import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../app.api'


import { Observable } from 'rxjs/'
import { map, catchError } from 'rxjs/operators'
import { ErrorHandler } from '../app.error-handler';
import { Plataform } from '../plataforms/plataform.model'

interface PlataformResponse {
  status: string;
  results?: number;
  plataformas: Plataform[];
}
interface SinglePlataformResponse {
  status: string;
  plataforma: Plataform;
}
@Injectable()
export class PlataformsService {

  api_url = API_URL + '/plataforms';

  constructor(private http: HttpClient) { }

  getPlataforms(): Observable<PlataformResponse> {
    return this.http.get<PlataformResponse>(this.api_url);
  }

  getPlataform(slug: string): Observable<SinglePlataformResponse> {
    return this.http.get<SinglePlataformResponse>(`${this.api_url}/${slug}`);
  }

  getPlataformIndex(id: string) {
    return this.http.get(`${this.api_url}/${id}`);
  }

  addPlataform(form: FormData) {
    return this.http.post(this.api_url + '/admin', form);
  }
  updatePlataform(id: string, form: FormData) {
    return this.http.patch(`${this.api_url}/admin/${id}`, form)
  }
}
