interface TaxaDeServico {
    cobra: boolean,
    valorPerDay?: number,
}

interface TaxaDeLimpeza {
    cobra: boolean,
    valor?: number,
}

interface Lugar {
    cidade: string,
    estado: string,
    endereco: string,
}

export interface Imovel {
    iId: string,
    espaco: string
    label: string,
    nHospedes: number,  
    nQuartos: number,
    nCamas: number,
    nBanheiros: number,
    arCond: boolean,
    wifi: boolean,
    cozinha: boolean,
    freeParking: boolean,
    piscina: boolean, 
    pricePerNight: number,
    descricao: string,
    photo: string,
    lugar: Lugar,
    taxaDeServico: TaxaDeServico,
    taxaDeLimpeza: TaxaDeLimpeza,
}