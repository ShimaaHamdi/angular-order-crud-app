import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.scss']
})
export class AddResturantComponent implements OnInit {
  restaurantRecords: Restaurant = {
    id: 0,
    order: '',
    numOfpiece: 0,
    name: '',
    phone: '',
    location: ''
  }


  constructor(private rs:RestaurantService, private router:Router) { }
  ngOnInit(): void {

  }
  addRecords(){
    this.rs.create(this.restaurantRecords).subscribe(()=>{
      this.router.navigate(["/"])
    })
  }

}
