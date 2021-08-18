import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/core/models/transferencia';
import { TransferenciaResponse } from 'src/app/core/models/transferencia-response';
import { TransferenciaService } from 'src/app/core/services/transferencia.service';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'nombre', 'apellido', 'banco','tipoCuenta','numeroCuenta','monto','fecha'];

  transferencias: Transferencia[] = [];

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.transferenciaService.get().subscribe((res: TransferenciaResponse) => {
      this.transferencias = res.data;
    });
  }

}
