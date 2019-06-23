import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient) {
   }

  getApiCall(apiUrl: any) {
    return this.httpClient.get(this.apiUrl + apiUrl );
  }

  postApiCall(apiUrl: any,jsonBody) {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8'
    });
    const options = {
      headers : httpHeaders
    }
    return this.httpClient.post(this.apiUrl + apiUrl, JSON.stringify(jsonBody), options );
  }

  putApiCall(apiUrl: any,jsonBody) {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8'
    });
    const options = {
      headers : httpHeaders
    }
    return this.httpClient.put(this.apiUrl + apiUrl, JSON.stringify(jsonBody), options );
  }

  patchApiCall(apiUrl: any,jsonBody) {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8'
    });
    const options = {
      headers : httpHeaders
    }
    return this.httpClient.patch(this.apiUrl + apiUrl, JSON.stringify(jsonBody), options );
  }

  deleteApiCall(apiUrl: any) {
    return this.httpClient.delete(this.apiUrl + apiUrl);
  }
}
