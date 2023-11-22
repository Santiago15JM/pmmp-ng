import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { AnimalPanelComponent } from './animal-panel/animal-panel.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { isLoggedInGuard } from './IsLoggedIn.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [isLoggedInGuard] },
  { path: "dashboard/add-pet", component: AddPetComponent, canActivate: [isLoggedInGuard] },
  { path: "dashboard/animal-situation", component: AnimalPanelComponent, canActivate: [isLoggedInGuard] },
  { path: "dashboard/edit-profile", component: EditProfileComponent, canActivate: [isLoggedInGuard] },
  { path: "dashboard/pet-details/:id", component: DetailsComponent, canActivate: [isLoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
