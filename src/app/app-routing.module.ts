import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { AnimalPanelComponent } from './animal-panel/animal-panel.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard/add-pet", component: AddPetComponent },
  { path: "dashboard/animal-situation", component: AnimalPanelComponent },
  { path: "dashboard/edit-profile", component: DashboardComponent },
  { path: "dashboard/pet-details/:id", component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
