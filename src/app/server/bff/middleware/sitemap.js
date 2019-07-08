import getSitemap from '../api/sitemap';

export default async function sitemap(req, res, next) {
    const section = req.params.section;
    const path = section || '';

    try {
        if (req.app.locals.config.site.region === 'nz') {
            throw { status: 404, message: 'Page Not Found' };
        }

        const sitemaps = await getSitemap(path);
        res.header('Cache-Control', 'public, max-age=0');
        res.header('Content-Type', 'text/xml');
        res.send(sitemaps);
    } catch (err) {
        next(err);
    }
}
