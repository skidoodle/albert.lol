import { NextApiRequest, NextApiResponse } from 'next';

export default async function ip(req: NextApiRequest, res: NextApiResponse){
    let ip = req.headers['cf-connecting-ip'];
    res.status(200).json({ ip: ip });
}