import { NextApiRequest, NextApiResponse } from "next";

export default async function ip(req: NextApiRequest, res: NextApiResponse){
    const ip = (req.headers['x-forwarded-for' || 'x-vercel-forwarded-for']);
    res.json({ ip: ip });
}