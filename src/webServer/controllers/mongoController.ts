import { Request, Response } from 'express';
import * as ImovelRepositorio from '../../database/persistencia/imovelRepositorio';
import { connect, disconnect } from 'mongoose';

const uri = process.env.URI || "mongodb+srv://nick:Nkcl!@-1404@clone-airbnb.54mse.mongodb.net/clone-airbnb?retryWrites=true&w=majority";

export function getAlo(req: Request, res: Response) {
    res.send('Alô mundo');
}

export function getAloComParametro(req: Request, res: Response) {
    const nome = req.params.nome;
    res.send(`Alô, ${nome}`);
}

export function postAlo(req: Request, res: Response) {
    const {nome} = req.body;
    if(nome) {
        res.send(`Alô, ${nome}`);
    } else {
        res.status(400).send('Nome é obrigaório');
    }
}

export function getAloErro(req: Request, res: Response) {
    throw new Error('Algo deu errado!');
}

export async function getImoveis(req: Request, res: Response) {
    try {
        const cliente = await connect(uri);
        console.log('Conectado ao DB Atlas');

        const imoveis = await ImovelRepositorio.buscar();
        res.send(imoveis);
        
    } catch (error) {
        
        res.send(error);
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }

}
