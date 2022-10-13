import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployedialogComponent } from '../employedialog/employedialog.component';

@Component({
  selector: 'app-employeframe',
  templateUrl: './employeframe.component.html',
  styleUrls: ['./employeframe.component.css']
})
export class EmployeframeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(EmployedialogComponent,{width: '30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`) ;
    });
  }

  ngOnInit(): void {
  }

}
