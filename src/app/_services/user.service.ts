import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';
import { Observable } from 'rxjs';

const baseUrl = `${environment.apiUrl}`;
const registerUrl = `${environment.registerUrl}`
@Injectable({ providedIn: 'root' })
export class UserService {
    httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http: HttpClient) { }
  /** GET heroes from the server */

    getAll(){
       // console.log(baseUrl)
        return this.http.get<User[]>(baseUrl,this.httpHeader);
    }

    getById(id: number) {
        return this.http.get<User>(`${baseUrl}/${id}`,this.httpHeader);
    }

    create(params: any) {
        return this.http.post(baseUrl, params,this.httpHeader);
    }

    update(id: number, params: any) {
        return this.http.put(`${baseUrl}/${id}`, params,this.httpHeader);
    }

    delete(id: number) {
        return this.http.delete(`${baseUrl}/${id}`,this.httpHeader);
    }
    register(account: any) {
        return this.http.post(`${registerUrl}/account`, account,this.httpHeader);
    }
}