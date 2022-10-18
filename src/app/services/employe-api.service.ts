import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeApiService {

  url:string  = "http://localhost:3000/employes";
  constructor(private http:HttpClient) { }

  getAllEmploye(){
   return  this.http.get<any>(this.url);
  }
  
  addEmploye(data : any){
    return  this.http.post<any>(this.url,data);
    
  }
}
