import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/test.reducers';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { DataService } from './data.service';
import { TestcomComponent } from './testcom/testcom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CareerComponent,
    ContactusComponent,
    SignupComponent,
    TestcomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
     StoreModule.forRoot({
       tutorial: reducer
     })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
