import { Imovel } from "../entities/imovel";
import { locacao } from "../entities/locacao";
import { model, Schema, SchemaTypes } from 'mongoose';

const LocacaoSchema = new Schema<locacao>({
    iId: [{ type: SchemaTypes.ObjectId,  ref: 'Imovel' }],
    checkin: {type: Date, required: true},
    checkout: {type: Date, required: true},
    nome: { type: String, required: true, max: 100 },
    telefone: { type: Number, required: true },
    email: { type: String, required: true, max: 100 },
    total: { type: Number, required: true },
    
});

export const LocacaoModel = model<locacao>('Locacao', LocacaoSchema, 'locacao');

