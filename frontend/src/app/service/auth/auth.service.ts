import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase = environment.URL + 'auth';

  constructor(private http: HttpClient) { }

  GetToken(item: any): Observable<any> {
    return this.http.post<any>(this.urlBase, item);
  }


}
