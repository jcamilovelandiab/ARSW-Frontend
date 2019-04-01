import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uri = 'https://backarsw.herokuapp.com/v1/pasajeros';

  constructor(
    private http: HttpClient
  ) {}

  public savePasajero(pasajero){
    return this.http.post(this.uri+'/savePasajero', pasajero);
  }

  public login(email, password){
    return null;
  }

  public getUserDetails(correo, clave){
      return this.http.get(this.uri+'/login/'+correo+'/'+clave).subscribe( data => {
        console.log(data, "this is the message that the server sent");
      });
  }
}
