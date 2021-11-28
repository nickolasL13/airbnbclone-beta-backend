import { ObjectId } from 'bson';
import { model, Schema, SchemaTypes } from 'mongoose';
import {Imovel} from './imovel';

export interface locacao extends Imovel {
    iId: string,
    idImovel: string,
    checkin: Date,
    checkout: Date,
    nome: string,
    telefone: string,
    email: string,
    total: string
}