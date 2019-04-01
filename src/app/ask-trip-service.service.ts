import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AskTripServiceService {
  private uri = 'http://'+window.location.hostname+':8080/v1';
  constructor(private http : HttpClient
    ) { }
  public addTrip(trip, correo){
    return this.http.post(this.uri+'/pasajeros/'+correo+"/viajes",trip);
  }
}
