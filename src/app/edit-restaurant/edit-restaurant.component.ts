import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.scss']
})
export class EditRestaurantComponent implements OnInit {

  restaurantRecords: Restaurant = {
    id: 0,
    order: '',
    numOfpiece: 0,
    name: '',
    phone: '',
    location: ''
  }



  constructor(private rs:RestaurantService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      let id = Number(params.get('id'))
      this.getById(id)
    })
  }
  getById(id:number){
    this.rs.getbyId(id).subscribe((data)=>{
      this.restaurantRecords = data;
    })
  }
  updateRecords(){
    this.rs.update(this.restaurantRecords).subscribe(()=>{
      this.router.navigate(['/'])
    })
  }
}
