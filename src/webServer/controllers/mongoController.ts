import { Request, Response } from 'express';
import * as ImovelRepositorio from '../../database/persistencia/imovelRepositorio';
import { Imovel } from '../../database/entities/imovel';

export async function postImoveis(req: Request, res: Response) { //
    try {
        const imovel: Imovel = req.body;
        if (imovel) {
            await ImovelRepositorio.criar(imovel);
            res.send(`Imóvel adicionado com sucesso!`);
        } else {
            res.status(400).send('Houve um problema na inserção dos dados!');
        }
    
    } catch (error) {
        res.send(`Deu um errinho: ${error}`);
    } 
}

export async function getImoveis(req: Request, res: Response) { //
    try {
        const imoveis = await ImovelRepositorio.buscar();
        res.send(imoveis);       
    } catch (error) {
        res.send(error);
    }
}

export async function getImovelArCond(req: Request, res: Response) { //
    try {
        const imoveis = await ImovelRepositorio.buscarPorArCond();
        res.send(imoveis);
        
    } catch (error) {
        res.send(error);
    } 
}

export async function getImovelWifi(req: Request, res: Response) { //
    try {
        const imoveis = await ImovelRepositorio.buscarPorWifi();
        res.send(imoveis);
        
    } catch (error) {
        res.send(error);
    } 
}


export async function getImovelCozinha(req: Request, res: Response) { //
    try {
        const imoveis = await ImovelRepositorio.buscarPorCozinha();
        res.send(imoveis);
        
    } catch (error) {
        res.send(error);
    } 
}


export async function getImovelFreeParking(req: Request, res: Response) { //
    try {
        const imoveis = await ImovelRepositorio.buscarPorFreeParking();
        res.send(imoveis);
        
    } catch (error) {
        res.send(error);
    } 
}


export async function getImovelPiscina(req: Request, res: Response) { //
    try {
        const imoveis = await ImovelRepositorio.buscarPorPiscina();
        res.send(imoveis);
        
    } catch (error) {
        res.send(error);
    } 
}

export async function getImovel(req: Request, res: Response) { //
    try {
        const id = req.params.id;
        const imoveis = await ImovelRepositorio.buscarPorId(id);
        res.send(imoveis);
        
    } catch (error) {
        res.send(error);
    } 
}

export async function getImovelPreco(req: Request, res: Response) { //
    try {
        const minPrice = Number(req.params.minPrice);
        const maxPrice = Number(req.params.maxPrice);
        const imoveis = await ImovelRepositorio.buscarPorPreco(minPrice, maxPrice);
        res.send(imoveis);
        
    } catch (error) {
        res.send(error);
    } 
}

export async function getImovelEspaco(req: Request, res: Response) { //
    try {
        const espaco = req.params.espaco;
        const imoveis = await ImovelRepositorio.buscarPorEspaco(espaco);
        res.send(imoveis);
        
    } catch (error) {
        res.send(error);
    } 
}

export async function getImovelCidade(req: Request, res: Response) { //
    try {
        const cidade = req.params.cidade;
        const imoveis = await ImovelRepositorio.buscarPorCidade(cidade);
        res.send(imoveis);
        
    } catch (error) {
        res.send(error);
    } 
}

export async function getImovelEstado(req: Request, res: Response) { //
    try {
        const estado = req.params.estado;
        const imoveis = await ImovelRepositorio.buscarPorEstado(estado);
        res.send(imoveis);
        
    } catch (error) {
        res.send(error);
    } 
}

export async function deleteImovel(req: Request, res: Response) {
    try{
        const iId = req.body.iId;
        const del = await ImovelRepositorio.deletarImovel(iId); 
        res.status(200).send({
            message: 'imóvel deletado com sucesso!'
        })
    } catch(error) {
        console.log(error);
        res.status(500).send({message: 'Falha ao deletar locacao'});
    }
}


