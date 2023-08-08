import { Restaurant } from './../restaurant';
import { Component, Inject, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
  @Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.scss']
})
export class DeleteRestaurantComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteRestaurantComponent>,
    private rs: RestaurantService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {


  }
  confirmDelete() {
    this.rs.delete(this.data.id).subscribe(()=>{
      this.dialogRef.close(this.data.id)
    })
    }
  }

