/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'strapi-aws-develop-bucket.s3.us-east-2.amazonaws.com',

            }
        ]
    }
}

module.exports = nextConfig
