import { Request, Response } from 'express';
import * as ImovelRepositorio from '../../database/persistencia/imovelRepositorio';
import { connect, disconnect } from 'mongoose';
import { Imovel } from '../../database/entities/imovel';

const uri = process.env.URI;

export async function getImoveis(req: Request, res: Response) {
    try {
        const cliente = await connect(uri!);
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

export async function getImovel(req: Request, res: Response) {
    try {
        const cliente = await connect(uri!);
        console.log('Conectado ao DB Atlas');

        const id = req.params.id;

        const imoveis = await ImovelRepositorio.buscarPorId(id);
        res.send(imoveis);
        
    } catch (error) {
        res.send(error);
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }

}

export async function postImoveis(req: Request, res: Response) {
    try {
        const cliente = await connect(uri!);
        console.log('Conectado ao DB Atlas');

        const imovel: Imovel = req.body;

        if (imovel) {

            await ImovelRepositorio.criar(imovel);
            res.send(`Imóvel adicionado com sucesso!`);
        } else {
            res.status(400).send('Houve um problema na inserção dos dados!');
        }
    
    } catch (error) {
        res.send(`Deu um errinho: ${error}`);
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }
}
