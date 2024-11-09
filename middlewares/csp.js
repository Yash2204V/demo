const cspMiddleware = (req, res, next) => {
    res.setHeader(
      'Content-Security-Policy',
      `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://*.vercel.app;
        style-src 'self' 'unsafe-inline';
        font-src 'self' data: https://*.vercel.app;
        img-src 'self' data: https: blob:;
        connect-src 'self' https://*.vercel.app https://vercel.live;
      `.replace(/\s{2,}/g, ' ').trim()
    );
    next();
  }
  
  module.exports = cspMiddleware;