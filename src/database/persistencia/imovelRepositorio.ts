import { ImovelModel  } from "./imovelModel";
import { Imovel } from "../entities/imovel";

export async function criar( imovel: Imovel ): Promise<Imovel> {
    return ImovelModel.create(imovel);
}

export async function buscar(): Promise<Imovel[]> {
    let consulta = ImovelModel.find();
    return consulta.exec(); 
}