import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Micro3Service {

  private urlBase = environment.URL + 'api/services';
  constructor(private http: HttpClient) { }
  GetText(): Observable<any> {
    return this.http.post<any>(this.urlBase, null);
  }

}
