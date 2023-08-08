import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteRestaurantComponent } from '../delete-restaurant/delete-restaurant.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent implements OnInit {
  allRestaurants: Restaurant[] = [];
  displayedColumns: string[] = ['id', 'order', 'numOfpiece', 'name', 'phone', 'location', 'action'];
  constructor(private restaurant: RestaurantService, public dialog:MatDialog) { }
  ngOnInit(): void {
    this.getAllRestaurants();
  }
  getAllRestaurants() {
    this.restaurant.getAll().subscribe((data) => {
      this.allRestaurants = data;
      console.log(this.allRestaurants)

    })
  }

  openDeleteModel(id:number){
  const deletConfm = this.dialog.open(DeleteRestaurantComponent, {
      width: '350px',
      data:{id}
    });
    deletConfm.afterClosed().subscribe((result)=>{
      if(result){
        this.allRestaurants = this.allRestaurants.filter((_)=>_.id !==id);
      }
    })
  }
}

