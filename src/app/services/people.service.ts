import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  url: string = "http://127.0.0.1:3000";
  constructor(private http: HttpClient) { }

  listPeople() {
    return this.http.get(this.url+'/api/v1/people')
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  addPeople(data: any) {
    return this.http.post(this.url + '/api/v1/people', data, this.httpOptions)
  }

  findPeople(id: any) {
    return this.http.get(this.url + '/api/v1/people/' + id)
  }

  updatePeople(data: any, id:any) {
    return this.http.put(this.url + '/api/v1/people/'+id, data, this.httpOptions)
  }

  deletePeople(id: any) {
    return this.http.delete(this.url + '/api/v1/people/'+id)
  }
}
