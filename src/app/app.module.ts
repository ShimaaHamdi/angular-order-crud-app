import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AddResturantComponent } from './add-resturant/add-resturant.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { RouterModule } from '@angular/router';
 import {MatDialogModule} from '@angular/material/dialog';
import { DeleteRestaurantComponent } from './delete-restaurant/delete-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddResturantComponent,
    EditRestaurantComponent,
    DeleteRestaurantComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
