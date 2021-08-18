import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Destinatario } from 'src/app/core/models/destinatario';
import { DestinatarioResponse } from 'src/app/core/models/destinatario-response';
import { Transferencia } from 'src/app/core/models/transferencia';
import { DestinatarioService } from 'src/app/core/services/destinatario.service';
import { TransferenciaService } from 'src/app/core/services/transferencia.service';

@Component({
  selector: 'app-nuevo-movimiento',
  templateUrl: './nuevo-movimiento.component.html',
  styleUrls: ['./nuevo-movimiento.component.css']
})
export class NuevoMovimientoComponent implements OnInit {
  destinatarios: Destinatario[] = [];

  destinatarioId: number = NaN;

  monto: number = NaN;

  constructor(
    private transferenciaService: TransferenciaService,
    private destinatarioService: DestinatarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.destinatarioService.get().subscribe((res: DestinatarioResponse) => {
      this.destinatarios = res.data;
    });
  }

  save(): void {
    var transferencia = <Transferencia> {
      destinatarioId: this.destinatarioId,
      monto: this.monto
    };

    if (this.destinatarioId && this.monto) {
      this.transferenciaService.save(transferencia).subscribe((res: Transferencia) => {
        this.router.navigateByUrl('/dashboard/movimiento');
      });
    } else {
      alert('Todos los campos son obligatorios');
    }
  }
}
