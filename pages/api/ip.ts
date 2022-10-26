import { NextApiRequest, NextApiResponse } from 'next';

export default async function ip(req: NextApiRequest, res: NextApiResponse){
    let ip = req.headers['cf-connecting-ip'];
    let continent = req.headers['cf-ipcontinent'];
    let country = req.headers['cf-ipcountry'];
    let city = req.headers['cf-ipcity'];
    res.status(200).json({
        ip: ip,
        city: city,
        country: country,
        continent: continent
    });
}