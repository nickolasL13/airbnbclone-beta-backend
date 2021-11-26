import { ImovelModel  } from "./imovelModel";
import { Imovel } from "../entities/imovel";

export async function criar( imovel: Imovel ): Promise<Imovel> { //
    return ImovelModel.create(imovel);
}

export async function buscar(): Promise<Imovel[]> { //
    let consulta = ImovelModel.find();
    return consulta.exec(); 
}


export async function buscarPorId(id: string): Promise<Imovel[]> { //
    let consulta = ImovelModel.find({iId: id});
    return consulta.exec(); //retorna uma Promise
}

export async function buscarPorArCond(): Promise<Imovel[]> { //
    let consulta = ImovelModel.where('arCond').equals(true);
    return consulta.exec(); //retorna uma Promise
}

export async function buscarPorWifi(): Promise<Imovel[]> { //
    let consulta = ImovelModel.where('wifi').equals(true);
    return consulta.exec(); //retorna uma Promise
}

export async function buscarPorCozinha(): Promise<Imovel[]> { //
    let consulta = ImovelModel.where('cozinha').equals(true);
    return consulta.exec(); //retorna uma Promise
}

export async function buscarPorFreeParking(): Promise<Imovel[]> { //
    let consulta = ImovelModel.where('freeParking').equals(true);
    return consulta.exec(); //retorna uma Promise
}

export async function buscarPorPiscina(): Promise<Imovel[]> { //
    let consulta = ImovelModel.where('piscina').equals(true);
    return consulta.exec(); //retorna uma Promise
}

export async function buscarPorPreco(minPrice: number, maxPrice: number): Promise<Imovel[]> { //
    let consulta = ImovelModel.where('pricePerNight').gte(minPrice).lte(maxPrice);
    return consulta.exec(); //retorna uma Promise
}

export async function buscarPorEspaco(espaco: string): Promise<Imovel[]> { //
    let consulta = ImovelModel.find({espaco: { $regex: espaco, $options: 'i'}});
    return consulta.exec(); //retorna uma Promise
}

export async function buscarPorCidade(cidade: string): Promise<Imovel[]> { //
    let consulta = ImovelModel.where('lugar.cidade').regex(cidade);
    return consulta.exec(); //retorna uma Promise
}

export async function buscarPorEstado(estado: string): Promise<Imovel[]> { //
    let consulta = ImovelModel.find({'lugar.estado': {$regex: estado, $options: 'i'}});
    return consulta.exec(); //retorna uma Promise
}



