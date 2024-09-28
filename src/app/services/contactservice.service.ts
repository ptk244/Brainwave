import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  url='https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile';
  
  constructor(private http:HttpClient) { }

  saveData(data:any){
    return this.http.post(this.url,data);
   }
   EditData(data:any,id:any){
    return this.http.put(`${this.url}/${id}`,data)
   }

   getuserList(){
    return this.http.get(this.url)
   }

   getUserById(id:any){
     return this.http.get(`${this.url}/${id}`)
   }

   deleteRow(id:number){
    return this.http.delete(`${this.url}/${id}`)
   }
}
