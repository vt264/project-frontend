import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Destinatario } from 'src/app/core/models/destinatario';
import { DestinatarioService } from 'src/app/core/services/destinatario.service';

@Component({
  selector: 'app-nuevo-destinatario',
  templateUrl: './nuevo-destinatario.component.html',
  styleUrls: ['./nuevo-destinatario.component.css']
})
export class NuevoDestinatarioComponent implements OnInit {
  tipoCuentas = [
    'Cuenta Vista',
    'Cuenta Corriente',
    'Cuenta Ahorro',
  ];

  bancos = [
    'Banco Chile',
    'Banco Santander',
    'Banco Ripley',
    'Banco BCI',
    'Banco Estado',
  ];

  rut: string = '';

  nombre: string = '';

  apellido: string = '';

  banco: string = '';

  tipoCuenta: string = '';

  numero: number = NaN;

  constructor(private destinatarioService: DestinatarioService, private router: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    var destinatario = <Destinatario> {
      rut: this.rut,
      nombre: this.nombre,
      apellido: this.apellido,
      banco: this.banco,
      tipoCuenta: this.tipoCuenta,
      numero: this.numero,
    };

    if (this.rut && this.nombre && this.apellido && this.banco && this.tipoCuenta && this.numero) {
      this.destinatarioService.save(destinatario).subscribe(res => {
        this.router.navigateByUrl('/dashboard/destinatario');
      });
    } else {
      alert('Todos los campos son obligatorios');
    }
  }
}
