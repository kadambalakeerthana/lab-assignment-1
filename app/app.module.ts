import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypipePipe } from './mypipe.pipe';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HttpClientModule} from '@angular/common/http';
import { EmpComponent } from './emp/emp.component';
@NgModule({
  declarations: [
    AppComponent,
    MypipePipe,
    EmployeelistComponent,
    EmpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
],
  
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
