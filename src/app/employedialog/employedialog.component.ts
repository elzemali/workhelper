import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeApiService } from '../services/employe-api.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-employedialog',
  templateUrl: './employedialog.component.html',
  styleUrls: ['./employedialog.component.css']
})
export class EmployedialogComponent implements OnInit {

  employeForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private employeApi:EmployeApiService,private dialoRef:MatDialogRef<EmployedialogComponent>) { }

  ngOnInit(): void {
    this.employeForm = this.formBuilder.group({
      nom : ['',Validators.required],
      prenom : ['',Validators.required],
      adress : ['',Validators.required],
      date : ['',Validators.required],
      fonction : ['',Validators.required]
      
    })
  }

  ajouterEmploye():void{
    if(this.employeForm.valid){
    this.employeApi.addEmploye(this.employeForm.value).subscribe({
      next:(res)=>{ alert("employe ajouté avec succes");
      this.employeForm.reset();
      this.dialoRef.close();
      
      },

      error: (err)=> { },
    });

    console.log(this.employeForm.value)
  }
  }

}
