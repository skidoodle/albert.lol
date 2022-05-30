import { NextApiRequest, NextApiResponse } from 'next'

import aws from 'aws-sdk'

const { BUCKET, ACCESS_KEY, SECRET_KEY, ENDPOINT, REGION } = process.env

export default async function(req: NextApiRequest, res: NextApiResponse) {
    aws.config.s3 = ({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_KEY,
        region: REGION,
        endpoint: ENDPOINT,
        signatureVersion: 'v4'
    })

    let isTruncated: boolean | undefined = true
    let startAfter

    let objects = 0
    let size = 0

    const s3 = new aws.S3()

    while(isTruncated) {
        let params: any = { Bucket: BUCKET }
        
        if(startAfter) {
            params.StartAfter = startAfter
        }
        const data = await s3.listObjectsV2(params).promise()

        data.Contents?.forEach((object: any) => {
            objects++
            size += object.Size! / 1024 / 1024 / 1024
        })

        isTruncated = data.IsTruncated
        if (isTruncated) {
            startAfter = data.Contents!.slice(-1)[0].Key;
        }
    }
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    res.json({ object: objects, size: Number(size.toFixed(2)) })
}
