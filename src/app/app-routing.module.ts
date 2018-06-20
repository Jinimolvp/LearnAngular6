import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CareerComponent} from './career/career.component';
import {ContactusComponent} from './contactus/contactus.component';
import {SignupComponent} from './signup/signup.component';
import {TestcomComponent} from './testcom/testcom.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'About/:id',
    component: AboutComponent
  },
  {
    path : 'Career',
    component: CareerComponent
  },
  {
    path : 'Contactus',
    component: ContactusComponent
  },
  {
    path : 'Signup',
    component: SignupComponent
  },
  {
    path : 'Login',
    component: TestcomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
