import { Component, OnInit } from '@angular/core';
import { Destinatario } from 'src/app/core/models/destinatario';
import { DestinatarioResponse } from 'src/app/core/models/destinatario-response';
import { DestinatarioService } from 'src/app/core/services/destinatario.service';

@Component({
  selector: 'app-destinatario',
  templateUrl: './destinatario.component.html',
  styleUrls: ['./destinatario.component.css']
})
export class DestinatarioComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'rut', 'nombre', 'apellido', 'banco','tipoCuenta','numeroCuenta'];

  destinatarios: Destinatario[] = [];

  constructor(private destinatarioService: DestinatarioService) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.destinatarioService.get().subscribe((res: DestinatarioResponse) => {
      this.destinatarios = res.data;
    });
  }
}
