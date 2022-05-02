import aws, { ConfigurationOptions } from 'aws-sdk';
import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';
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
        Bucket: 'i.albrt.hu'
    }
    const data = await s3.listObjectsV2(params).promise()
    let totalsize = data.Contents!.reduce((acc, curr) => {
        return acc + curr.Size! / 1024 / 1024 / 1024
    }, 0)

    res.setHeader('Cache-Control', 's-maxage=86400');
    res.status(200).json (JSON.stringify({
        'objectCount': data.KeyCount,
        'totalSize': (Math.round(totalsize * 100) / 100)
    }, null, 2))
}