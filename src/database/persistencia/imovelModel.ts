import { Imovel } from "../entities/imovel";
import { model, Schema } from "mongoose";

const ImovelSchema = new Schema<Imovel>({
    iId: { type: String, required: true, max: 100 },
    espaco: { type: String, required: true, max: 100 },
    label: { type: String, required: true, max: 100 },
    nHospedes: { type: Number, required: true },
    nQuartos: { type: Number, required: true },
    nCamas: { type: Number, required: true },
    nBanheiros: { type: Number, required: true },
    arCond: { type: Boolean, required: true },
    wifi: { type: Boolean, required: true },
    cozinha: { type: Boolean, required: true },
    freeParking: { type: Boolean, required: true },
    pricePerNight: { type: Number, required: true },
    taxaDeLimpeza: { type: { cobra: Boolean, valor: Number }, required: true },
    taxaDeServico: { type: { cobra: Boolean, valorPerDay: Number }, required: true},    
});

export const ImovelModel = model<Imovel>('Imovel', ImovelSchema, 'imoveis');