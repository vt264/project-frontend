import { Destinatario } from "./destinatario";

export interface Transferencia {
    id: number;
    usuarioId: number,
    destinatarioId: number,
    monto: number,
    Destinatario: Destinatario[],
    createdAt: string
}