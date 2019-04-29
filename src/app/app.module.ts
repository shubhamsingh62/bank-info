import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AllDataComponent } from './all-data/all-data.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination';


import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    AllDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:"bankinfo",component:AllDataComponent},
      {path:"",redirectTo:"bankinfo",pathMatch:"full"},
      {path:"**",component:AllDataComponent}   
    ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
