import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointageApiService {

  url= "http://localhost:3000/pointage/";
  constructor(private http:HttpClient) { }
  
  getPointages(){
    return this.http.get<any>(this.url);
  }

  addpointage (row:any){
    return this.http.post<any>(this.url,row);
  }

  editpointage(row:any, id:number){
    return this.http.put<any>(this.url+id,row);
  }


  deletepointage(id:number){
    return this.http.delete<any>(this.url+id);
  }
}
