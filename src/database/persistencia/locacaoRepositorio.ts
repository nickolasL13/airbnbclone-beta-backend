import { LocacaoModel  } from "./locacaoModel";
import { locacao } from "../entities/locacao";

export async function criar( locacao: locacao ): Promise<locacao> {
    return LocacaoModel.create(locacao);
}

export async function buscar(): Promise<locacao[]> {
    let consulta = LocacaoModel.find();
    return consulta.exec(); 
}

export async function buscarPorId(idImovel: string): Promise<locacao[]> {
    let consulta = LocacaoModel.where('idImovel').equals(idImovel);
    return consulta.exec(); //retorna uma Promise
}

export async function updateLocacao(idImovel: string): Promise<any> {
    return await LocacaoModel.findByIdAndUpdate(idImovel);
}

export async function deletarLocacao(idImovel: string): Promise<any> {
    let consulta = LocacaoModel.findByIdAndRemove({idImovel});
    return consulta.exec();
}
