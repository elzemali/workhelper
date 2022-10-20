import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PointageApiService } from '../services/pointage-api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pointagedialog',
  templateUrl: './pointagedialog.component.html',
  styleUrls: ['./pointagedialog.component.css']
})
export class PointagedialogComponent implements OnInit {

  pointageForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private api:PointageApiService,private dialoRef:MatDialogRef<PointagedialogComponent>) { }

  ngOnInit(): void {
    this.pointageForm= this.formBuilder.group({
      id_employe : ["",Validators.required],
      heure : ["",Validators.required],
      date : ["",Validators.required]

    })
  }

  addPointage(){
    if(this.pointageForm.valid){
        console.log(this.pointageForm.value);
        this.api.addpointage(this.pointageForm.value).subscribe({
          next:(value)=> {
            alert("pointage ajouté");
            this.pointageForm.reset();
            this.dialoRef.close();
          },
          error:(err)=> {
            
          },
        });

    }
  }

}
