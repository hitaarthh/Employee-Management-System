import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { OurLegalTeamComponent } from './our-legal-team/our-legal-team.component';
import { OurExpertiseComponent } from './our-expertise/our-expertise.component';
import { ClientPortalComponent } from './client-portal/client-portal.component';

const routes: Routes = [

  {path:"show-all-employees",component: EmployeeListComponent},
  {path:"add-employee", component: AddEmployeeComponent},
  {path:'', redirectTo: "home", pathMatch:"full"},
  {path:'updating-by-id/:id',component:UpdateEmployeeComponent},
  {path:'details-of-employee/:id',component:ShowDetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:AdminLoginComponent},
  { path: 'our-legal-team', component: OurLegalTeamComponent },
  { path: 'our-expertise', component: OurExpertiseComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'client-portal', component: ClientPortalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
