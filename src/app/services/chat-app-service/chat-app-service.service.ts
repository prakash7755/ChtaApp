import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


const apiURT: String = 'http://localhost:8000/api/chat';


  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': localStorage.getItem('token'),
  })
};



@Injectable()
export class ChatAppServiceService {
  constructor(private http: HttpClient) { 
  }
  

  getMessages(){
     return this.http   
           .get(apiURT + '/user', httpOptions)
           .toPromise()
           .then((data: any) => {
             return data || {};
           })
           .catch(err => {
             console.log('Get All Messages - ', err)
           })
  }


  chatMsg(data){
     return this.http
           .post(apiURT + '/user', data,  httpOptions )
           .toPromise()
           .then((data: any) =>{
           	return data || {};
           })
           .catch(err => {
           	console.log('chat error - ', err)
           })
  }

}
