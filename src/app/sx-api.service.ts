import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMember } from './model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SxApiService {

  searchHistory: { [id: string]: IMember[]; } = {};

  constructor(private http: HttpClient) { }

  public sxPost(mcn: string | null = null, pn: string | null = null): Observable<any> {
    if (this.searchHistory[mcn + '|' + pn] !== undefined) {
      return of(this.searchHistory[mcn + '|' + pn]);
    } else {

      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      return this.http.get<any>(`http://localhost:5000/api/sxBackEnd/GetMemberRecords?mcn=${mcn}&pn=${pn}`, { headers: headers }).pipe(
        tap(r => {
          this.searchHistory[mcn + '|' + pn] = r;
          console.log(this.searchHistory[mcn + '|' + pn] !== undefined)
        }));
    }
  }
}
