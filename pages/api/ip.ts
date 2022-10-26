import { NextApiRequest, NextApiResponse } from 'next';

export default async function ip(req: NextApiRequest, res: NextApiResponse){
    let cf = req.headers['cf-connecting-ip'];
    let cf2 = req.headers['Cf-Pseudo-IPv4'];
    let xff = req.headers['x-forwarded-for'];
    let xri = req.headers['x-real-ip'];
    res.status(200).json({ cf: cf, cf2: cf2, xff: xff, xri: xri });
}