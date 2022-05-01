import aws from 'aws-sdk';

export default async function handler(req, res) {
    aws.config.update({
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

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        'objectCount': data.KeyCount,
        'totalSize': (Math.round(totalsize * 100) / 100)
    }, null, 2))
}