import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AskTripServiceService {
  private uri = 'http://backarsw.herokuapp.com/v1/viajes';
  constructor(private http : HttpClient
    ) { }
  public addTrip(trip){
    console.log("TRIP HTTP",trip)
    return this.http.post(this.uri+'/saveViaje',trip);
  }
  
}
