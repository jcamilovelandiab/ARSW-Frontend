import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ){}

  public loginUser(){    
    const user = {
      'correo': this.correo,
      'clave': this.clave
    };
    //console.log("ESTAMOS EN LOGIN",user);
    //console.log("WE ARE ON LOGIN ",this.correo, this.clave);
    //this.authService.getUserDetails(this.correo, this.clave);
    this.router.navigate(['/maps']);
  }
  public registerUser(){
    const userSave = {
      'correo': this.correo,
      'nombres': this.nombres,
      'apellidos': this.apellidos,
      'celular': this.celular,
      'clave': this.clave
    }
    console.log(userSave);
    this.authService.savePasajero(userSave)
      .subscribe(response => {
          console.log(response);
          this.router.navigate(['/']);
        });
  }

  ngOnInit() {
  }

}
