import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employedialog',
  templateUrl: './employedialog.component.html',
  styleUrls: ['./employedialog.component.css']
})
export class EmployedialogComponent implements OnInit {

  employeForm !: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

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

    console.log(this.employeForm.value)
  }

}
