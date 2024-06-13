import { GetServerSideProps } from 'next';
import { format } from 'date-fns';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Define your static routes
  const staticRoutes = [
    '/',
    '/how-it-works',
    '/reviews',
    '/frequently-asked-questions',
    '/about-us',
    "/i-need-to-sell-my-house",
    '/contact-us',
    '/not-found',
    // Add other static routes
  ];

  // Generate sitemap XML for static routes
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticRoutes
      .map((url) => {
        return `
      <url>
        <loc>${`https://yourdomain.com${url}`}</loc>
        <lastmod>${format(new Date(), 'yyyy-MM-dd')}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
    `;
      })
      .join('')}
  </urlset>`;

  // Set content type and send sitemap XML response
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {}, // You can return any props if needed
  };
};

export default Sitemap;
