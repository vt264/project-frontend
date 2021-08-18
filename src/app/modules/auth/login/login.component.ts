import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputRut = new FormControl;

  inputPassword = new FormControl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.inputRut.value,this.inputPassword.value).subscribe((usuario: Usuario) => {
      localStorage.setItem('token',usuario.token);
      
      this.router.navigateByUrl('dashboard/inicio');
    },e => {
      alert('Credenciales incorrectas');
    });
  }
}
