import { Imovel } from "../entities/imovel";
import { locacao } from "../entities/locacao";
import { model, Schema, SchemaTypes } from 'mongoose';
import { ImovelModel } from "./imovelModel";

const LocacaoSchema = new Schema<locacao>({
    iId: { type: String, required: true },
    idImovel: {type: String, required: true},
    checkin: {type: Date, required: true},
    checkout: {type: Date, required: true},
    nome: { type: String, required: true, max: 100 },
    telefone: { type: String, required: true },
    email: { type: String, required: true, max: 100 },
    total: { type: String, required: true },
    
});

export const LocacaoModel = model<locacao>('Locacao', LocacaoSchema, 'locacao');