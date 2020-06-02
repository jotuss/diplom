import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CutawayComponent } from './core/cutaway/cutaway.component';
import { SignInComponent } from './core/sign-in/sign-in.component';


const routes: Routes = [
  { path: '', component: CutawayComponent },
  { path: 'signIn', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
