import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Micro2Service {

  private urlBase = environment.URL + 'api/dashboard';

  constructor(private http: HttpClient) { }

  GetData(): Observable<any> {
    return this.http.get<any>(this.urlBase);
  }


}
