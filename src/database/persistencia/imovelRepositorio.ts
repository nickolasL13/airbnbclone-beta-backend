import { ImovelModel  } from "./imovelModel";
import { Imovel } from "../entities/imovel";

export async function criar( imovel: Imovel ): Promise<Imovel> {
    return ImovelModel.create(imovel);
}

export async function buscar(): Promise<Imovel[]> {
    let consulta = ImovelModel.find();
    return consulta.exec(); 
}

export async function buscarPorId(iId: string): Promise<Imovel[]> {
    let consulta = ImovelModel.where('iId').equals(iId);
    return consulta.exec(); //retorna uma Promise
}

export async function updateImovel(id: string): Promise<any> {
    return await ImovelModel.findByIdAndUpdate(id);
}

export async function deletarImovel(iId: string): Promise<any> {
    let consulta = ImovelModel.findByIdAndRemove({iId});
    return consulta.exec();
}
