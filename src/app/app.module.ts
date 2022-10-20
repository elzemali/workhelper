import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EmployeframeComponent } from './employeframe/employeframe.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EmployedialogComponent } from './employedialog/employedialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PointageframeComponent } from './pointageframe/pointageframe.component';
import { PointagedialogComponent } from './pointagedialog/pointagedialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    EmployeframeComponent,
    EmployedialogComponent,
    PointageframeComponent,
    PointagedialogComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule,
    HttpClientModule,MatTableModule,MatPaginatorModule,MatSortModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
