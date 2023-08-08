import { Restaurant } from './restaurant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  constructor(private http: HttpClient) { }

  //get all recods
  getAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:3000/Restaurants")
  }

  //Add Recods
  create(payload: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>("http://localhost:3000/Restaurants", payload)
  }

  //Get Records
  getbyId(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`http://localhost:3000/Restaurants/${id}`)
  }

  //Update Records
  update(payload: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(`http://localhost:3000/Restaurants/${payload.id}`, payload)
  }

  delete(id: number) {
   return this.http.delete(`http://localhost:3000/Restaurants/${id}`)
  }

}
