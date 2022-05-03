import aws from 'aws-sdk';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    aws.config.s3 = ({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
        region: process.env.REGION,
        endpoint: process.env.ENDPOINT,
        signatureVersion: 'v4'
    });
    const s3 = new aws.S3();
    const params = {
        Bucket: process.env.BUCKET!,
    }
    const data = await s3.listObjectsV2(params).promise()
    let size = 0;
    data.Contents!.forEach(item => {
        size += item.Size! / 1024 / 1024 / 1024;
    });
    size = Number(size.toFixed(2));
    let objects = data.Contents!.length
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    res.status(200).json(JSON.stringify({
        object: objects,
        size: size
    }, null, 2))
}