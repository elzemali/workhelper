import { Component, Inject,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeApiService } from '../services/employe-api.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-employedialog',
  templateUrl: './employedialog.component.html',
  styleUrls: ['./employedialog.component.css']
})
export class EmployedialogComponent implements OnInit {

  employeForm !: FormGroup;
  actionName !:string ;

  constructor(private formBuilder : FormBuilder, private employeApi:EmployeApiService,
    @Inject (MAT_DIALOG_DATA) public editRow:any,
    private dialoRef:MatDialogRef<EmployedialogComponent>) { }

  ngOnInit(): void {
    this.actionName =  this.editRow? "edit" : "enregistrer";
    this.employeForm = this.formBuilder.group({
      nom : [this.editRow? this.editRow.nom :'',Validators.required],
      prenom : [this.editRow? this.editRow.prenom :'',Validators.required],
      adress : [this.editRow? this.editRow.adress :'',Validators.required],
      date : [this.editRow? this.editRow.date :'',Validators.required],
      fonction : [this.editRow? this.editRow.fonction:'',Validators.required]
      
    })
  }

  ajouterEmploye():void{
    
    if(!this.editRow){
    if(this.employeForm.valid){
    this.employeApi.addEmploye(this.employeForm.value).subscribe({
      next:(res)=>{ alert("employe ajouté avec succes");
      this.employeForm.reset();
      this.dialoRef.close("save");
      
      },

      error: (err)=> { },
    });}}
    else {
      this.updateEmploye();
    }

    console.log(this.employeForm.value)
  
  }
  updateEmploye() {
    console.log("i am here");
    if(this.employeForm.valid){
      this.employeApi.editEmploye(this.employeForm.value,this.editRow.id).subscribe(
        { next:(value) =>{
          console.log(this.employeForm.value)
          this.dialoRef.close('save');
        },error(err) {
          
        },

        }
      );

    }
  }

}
