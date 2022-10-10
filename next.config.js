const nextSafe = require("next-safe");

module.exports = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: nextSafe({
          contentTypeOptions: "nosniff",
          contentSecurityPolicy: {
            "base-uri": "'none'",
            "child-src": "'none'",
            "connect-src": "'self'",
            "default-src": "'self'",
            "font-src": "'self'",
            "frame-src": "'none'",
            "img-src": "'self'",
            "frame-ancestors": "'none'",
            "manifest-src": "'self'",
            "media-src": "'self'",
            "object-src": "'none'",
            "prefetch-src": "'self'",
            "script-src": "'self'",
            "style-src": "'self'",
            "worker-src": "'self'",
            "form-action": "'self'",
            reportOnly: false,
          },
          referrerPolicy: "same-origin",
          xssProtection: "1; mode=block",
        }),
      },
    ];
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
