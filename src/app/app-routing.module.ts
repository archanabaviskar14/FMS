import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path:"",component:PropertyListComponent},
  {path:"rent-property",component:PropertyListComponent},
  {path:"property-detail/:id",component:PropertyDetailComponent},
  {path:"add-property",component:AddPropertyComponent},
  {path:"user/register",component:RegisterComponent},
  {path:"user/login",component:LoginComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
