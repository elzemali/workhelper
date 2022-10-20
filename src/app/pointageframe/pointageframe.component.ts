import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PointagedialogComponent } from '../pointagedialog/pointagedialog.component';

@Component({
  selector: 'app-pointageframe',
  templateUrl: './pointageframe.component.html',
  styleUrls: ['./pointageframe.component.css']
})
export class PointageframeComponent implements OnInit {

  constructor(private  dialog:MatDialog) { }

  ngOnInit(): void {
  }

  opendialog(){
    const dialogRef  = this.dialog.open( PointagedialogComponent,{ width:'30%' });
    dialogRef.afterClosed().subscribe(
      result=>{}
    );
  }

}
