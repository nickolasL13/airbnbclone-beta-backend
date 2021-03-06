import { Request, Response } from 'express';
import * as LocacaoRepositorio from '../../database/persistencia/locacaoRepositorio';
import { locacao } from '../../database/entities/locacao';

export async function getLocacao(req: Request, res: Response) {
    try {
        const locacao = await LocacaoRepositorio.buscar();
        res.send(locacao);
        
    } catch (error) {
        res.send(error);
    }
}    

export async function getLocacaoID(req: Request, res: Response) {
    try {
        const iId = req.params.idImovel;

        const locacao = await LocacaoRepositorio.buscarPorId(iId);
        res.send(locacao);
        
    } catch (error) {
        res.send(error);
    } 
}

export async function postLocacao(req: Request, res: Response) {
    try {
        const locacao: locacao = req.body;

        if (locacao) {
            await LocacaoRepositorio.criar(locacao);
            res.send(`Locação adicionada com sucesso!`);
        } else {
            res.status(400).send('Houve um problema na inserção dos dados!');
        }
    
    } catch (error) {
        res.send(`Deu um errinho: ${error}`);
    } 
}

export async function deleteLocacao(req: Request, res: Response) {
    try{
        const id = req.params.id;
        const del = await LocacaoRepositorio.deletarLocacao(id); 
        res.status(200).send({
            message: 'locacao deletada com sucesso!'
        })
    } catch(error) {
        console.log(error);
        res.status(500).send({message: 'Falha ao deletar locacao'});
    }
}