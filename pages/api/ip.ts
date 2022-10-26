import { NextApiRequest, NextApiResponse } from 'next';

export default async function ip(req: NextApiRequest, res: NextApiResponse){
    let cf = req.headers['cf-connecting-ip'];
    let xff = req.headers['x-forwarded-for'];
    let xri = req.headers['x-real-ip'];
    let cra = req.connection.remoteAddress;
    let sra = req.socket.remoteAddress;
    res.status(200).json({ cf: cf, xff: xff, xri: xri, cra: cra, sra: sra });
}