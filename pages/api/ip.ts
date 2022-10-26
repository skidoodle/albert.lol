import { NextApiRequest, NextApiResponse } from 'next';

export default async function ip(req: NextApiRequest, res: NextApiResponse){
    let cf = req.headers['cf-connecting-ip'];
    let xff = req.headers['x-forwarded-for'];
    let xri = req.headers['x-real-ip'];
    res.status(200).json({ cf: cf, xff: xff, xri: xri });
}