import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private server = 'http://localhost:8082';

  constructor(private http: HttpClient) {}

  // define function to upload files
  upload(formData: FormData, login: string): Observable<HttpEvent<string[]>> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("login",login);
    return this.http.post<string[]>(`${this.server}/uploadfile-user`, formData, {
      params: queryParams,
      reportProgress: true,
      observe: 'events'
    });
  }

  // define function to download files
  download(filename: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.server}/download/${filename}/`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }


}
