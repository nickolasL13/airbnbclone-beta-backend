import { ObjectId } from 'bson';
import { model, Schema, SchemaTypes } from 'mongoose';
import {Imovel} from './imovel';

export interface locacao extends Imovel {
    idImovel: Imovel[],
    checkin: Date,
    checkout: Date,
    nome: string,
    telefone: number,
    email: string,
    total: number
}
