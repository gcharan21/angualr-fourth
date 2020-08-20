import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import{ FormsModule} from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import{EmployeeService} from './employees.service';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PipesComponent,
    EmployeeDetailsComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
