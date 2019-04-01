import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public correo;
  public nombres;
  public apellidos;
  public fechaNacimiento;
  public celular;
  public clave;
  public confirmar_clave;
  public driverFlag;

  constructor(
    private router: Router
  ){}

  public loginUser(){    
    const user = {
      'correo': this.correo,
      'clave': this.clave
    };
    //console.log("WE ARE ON LOGIN ",this.correo, this.clave);
    //this.authService.getUserDetails(this.correo, this.clave);
   
  }
  public registerUser(){
    this.router.navigate(['/maps']);
   
  }

  ngOnInit() {
  }

}
