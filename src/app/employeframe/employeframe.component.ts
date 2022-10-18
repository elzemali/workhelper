import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployedialogComponent } from '../employedialog/employedialog.component';
import { EmployeApiService } from '../services/employe-api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employeframe',
  templateUrl: './employeframe.component.html',
  styleUrls: ['./employeframe.component.css']
})
export class EmployeframeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Nom', 'Prenom', 'Adress','Fonction','Date'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public dialog: MatDialog,private employeApi:EmployeApiService) {

  }

  openDialog() {
    const dialogRef = this.dialog.open(EmployedialogComponent,{width: '30%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`) ;
    });
  }


  getAllEmploye():any{

    this.employeApi.getAllEmploye().subscribe({
      next:(value)=> {
        console.log(value);
        
        this.dataSource = new MatTableDataSource(value);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
  
      },error(err) {
        
      },
    });
  }

  ngOnInit(): void {
    this.getAllEmploye(); 

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


