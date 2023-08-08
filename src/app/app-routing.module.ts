import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path:'Add', component:AddResturantComponent},
  {path:'edit/:id', component:EditRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
