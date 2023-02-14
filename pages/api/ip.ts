import { NextApiRequest, NextApiResponse } from 'next';

export default async function ip(req: NextApiRequest, res: NextApiResponse){
    let ip = req.headers['x-vercel-forwarded-for'];
    let region = req.headers['x-vercel-ip-country-region'];
    let country = req.headers['x-vercel-ip-country'];
    let city = req.headers['x-vercel-ip-city'];
    res.status(200).json({
        ip: ip,
        city: city,
        country: country,
        region: region
    });
}
