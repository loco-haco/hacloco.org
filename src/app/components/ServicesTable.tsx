import React from 'react';

interface Service {
  service: string;
  type: string;
  freeTier: string;
  sizeLimits: string;
  rateLimits: string;
  restrictions: string;
  creditCard: string;
  openSource: string;
}

const servicesData: Service[] = [
  {
    service: 'ngrok',
    type: 'Ingress-as-a-Service (Tunneling)',
    freeTier: '4 tunnels, 40 connections/min, random subdomains, HTTP/HTTPS/TCP support',
    sizeLimits: 'None',
    rateLimits: '40 connections/min',
    restrictions: 'Non-commercial use, random subdomains, no UDP support',
    creditCard: 'No',
    openSource: 'No (was open-source in v1, now proprietary)',
  },
  {
    service: 'UploadThing',
    type: 'File Storage',
    freeTier: '2 GB storage, 100 MB max file size, unlimited uploads',
    sizeLimits: '2 GB total, 100 MB/file',
    rateLimits: 'None',
    restrictions: 'Non-commercial use, API key required',
    creditCard: 'No',
    openSource: 'No',
  },
  {
    service: 'GitHub Pages',
    type: 'Static Site Hosting',
    freeTier: 'Unlimited public sites, custom domains, HTTPS',
    sizeLimits: '1 GB/repository, 100 MB/file',
    rateLimits: '100 GB bandwidth/month, 10 builds/hour',
    restrictions: 'Static content only, no server-side code',
    creditCard: 'No',
    openSource: 'Yes (platform proprietary, content often open-source)',
  },
  {
    service: 'Vercel',
    type: 'Static Site Hosting',
    freeTier: 'Unlimited sites, 100 GB bandwidth, 1000 serverless function invocations/day',
    sizeLimits: '1 GB/project',
    rateLimits: '100 deployments/day, 100k edge function invocations/month',
    restrictions: 'Non-commercial, 3 projects/repository, no SLA',
    creditCard: 'No',
    openSource: 'No',
  },
  {
    service: 'MongoDB Atlas',
    type: 'Database (NoSQL)',
    freeTier: '512 MB storage, shared cluster',
    sizeLimits: '512 MB, 16 MB/document',
    rateLimits: '100 concurrent connections',
    restrictions: 'Shared cluster, no SLA, not for large-scale production',
    creditCard: 'No',
    openSource: 'Yes (MongoDB open-source, Atlas proprietary)',
  },
  {
    service: 'Neon',
    type: 'Database (PostgreSQL)',
    freeTier: '3 GB storage, 1 project, 10 branches',
    sizeLimits: '3 GB total, 500 MB/branch',
    rateLimits: '75 requests/second, 100 compute hours/month',
    restrictions: 'Auto-sleep after 5 days inactivity, 1 project, no SLA',
    creditCard: 'No',
    openSource: 'Yes (PostgreSQL open-source, Neon proprietary)',
  },
  {
    service: 'Let’s Encrypt',
    type: 'SSL Certificates',
    freeTier: 'Unlimited certificates, automated issuance/renewal',
    sizeLimits: 'None',
    rateLimits: '50 certificates/week/domain, 5 duplicate certificates/3 hours',
    restrictions: 'Requires domain ownership, no wildcard certificates',
    creditCard: 'No',
    openSource: 'Yes',
  },
  {
    service: 'frp',
    type: 'Tunneling (Self-Hosted)',
    freeTier: 'Fully self-hosted, supports HTTP/HTTPS/TCP/UDP, custom domains',
    sizeLimits: 'None (depends on server)',
    rateLimits: 'None (depends on server)',
    restrictions: 'Requires server setup, manual SSL configuration',
    creditCard: 'No',
    openSource: 'Yes',
  },
  {
    service: 'MinIO',
    type: 'File Storage (Self-Hosted)',
    freeTier: 'S3-compatible object storage, unlimited with self-hosting',
    sizeLimits: 'None (depends on server)',
    rateLimits: 'None (depends on server)',
    restrictions: 'Requires server setup, manual scaling',
    creditCard: 'No',
    openSource: 'Yes',
  },
  {
    service: 'Nextcloud',
    type: 'File Storage/Collaboration (Self-Hosted)',
    freeTier: 'File storage, sync, collaboration, unlimited with self-hosting',
    sizeLimits: 'None (depends on server)',
    rateLimits: 'None (depends on server)',
    restrictions: 'Requires server setup, manual maintenance',
    creditCard: 'No',
    openSource: 'Yes',
  },
  {
    service: 'ZeroSSL',
    type: 'SSL Certificates',
    freeTier: '3 certificates/90 days, automated issuance',
    sizeLimits: 'None',
    rateLimits: '3 certificates/90 days',
    restrictions: 'Limited to 3 certificates, no wildcard certificates',
    creditCard: 'No',
    openSource: 'No',
  },
  {
    service: 'IBM Cloudant',
    type: 'Database (NoSQL, CouchDB-based)',
    freeTier: '1 GB storage, 20 lookups/second, 10 writes/second, 5 queries/second',
    sizeLimits: '1 GB total',
    rateLimits: '20 lookups/second, 10 writes/second, 5 queries/second',
    restrictions: 'Shared instance, no SLA, not for high-traffic production',
    creditCard: 'No',
    openSource: 'Yes (CouchDB open-source, Cloudant proprietary)',
  },
  {
    service: 'Twilio',
    type: 'Communication APIs',
    freeTier: '1000 inbound/outbound SMS, trial phone number, 100 voice minutes',
    sizeLimits: 'None',
    rateLimits: '1 message/second, 100 API calls/hour',
    restrictions: 'Trial account, non-commercial, requires verified phone number',
    creditCard: 'No',
    openSource: 'No',
  },
  {
    service: 'Cloudflare Workers',
    type: 'Serverless Platform/APIs',
    freeTier: '100,000 requests/day, 10 ms CPU time/request',
    sizeLimits: '1 MB/script',
    rateLimits: '1000 requests/minute, 1000 subrequests/day',
    restrictions: 'No SLA, non-commercial, limited to 100 scripts',
    creditCard: 'No',
    openSource: 'No',
  },
  {
    service: 'Supabase',
    type: 'Database/Storage/Authentication',
    freeTier: '500 MB database, 1 GB file storage, 50,000 auth users',
    sizeLimits: '500 MB database, 1 GB storage, 50 MB/file',
    rateLimits: '2 requests/second, 1000 API calls/hour',
    restrictions: 'Auto-pause after 7 days inactivity, no SLA',
    creditCard: 'No',
    openSource: 'Yes',
  },
  {
    service: 'Keycloak',
    type: 'Authentication (Self-Hosted)',
    freeTier: 'Unlimited users, SSO, OAuth2, OpenID Connect support',
    sizeLimits: 'None (depends on server)',
    rateLimits: 'None (depends on server)',
    restrictions: 'Requires server setup, manual configuration',
    creditCard: 'No',
    openSource: 'Yes',
  },
  {
    service: 'CockroachDB',
    type: 'Database (SQL)',
    freeTier: '10 GB storage, 50 million request units/month',
    sizeLimits: '10 GB total',
    rateLimits: '50 million request units/month',
    restrictions: 'Single region, no SLA, not for high-traffic apps',
    creditCard: 'No',
    openSource: 'Yes (core open-source, cloud proprietary)',
  },
  {
    service: 'PlanetScale',
    type: 'Database (MySQL)',
    freeTier: '5 GB storage, 1 billion row reads/month, 10 million row writes/month',
    sizeLimits: '5 GB total',
    rateLimits: '1 billion row reads, 10 million row writes/month',
    restrictions: '1 database, 10 branches, no SLA',
    creditCard: 'No',
    openSource: 'No (Vitess open-source, PlanetScale proprietary)',
  },
  {
    service: 'Railway',
    type: 'App Hosting/APIs',
    freeTier: '1 GB disk, 512 MB RAM, $5 usage credit/month',
    sizeLimits: '1 GB disk, 512 MB RAM',
    rateLimits: '1000 API calls/hour',
    restrictions: 'No SLA, single project, auto-sleep after inactivity',
    creditCard: 'No',
    openSource: 'No',
  },
  {
    service: 'Hetzner Cloud',
    type: 'Cloud Hosting',
    freeTier: '1 vCPU, 2 GB RAM, 20 GB storage, 20 TB traffic/month',
    sizeLimits: '20 GB storage',
    rateLimits: 'None',
    restrictions: '1 server, no SLA, requires account verification',
    creditCard: 'No',
    openSource: 'No',
  },
];

const ServicesTable: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Free Services for Hobbyist Developers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Service</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Type</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Free Tier Details</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Size Limits</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Rate Limits</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Restrictions</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Credit Card</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Open Source</th>
            </tr>
          </thead>
          <tbody>
            {servicesData.map((service, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-600 border-b">{service.service}</td>
                <td className="py-3 px-4 text-sm text-gray-600 border-b">{service.type}</td>
                <td className="py-3 px-4 text-sm text-gray-600 border-b">{service.freeTier}</td>
                <td className="py-3 px-4 text-sm text-gray-600 border-b">{service.sizeLimits}</td>
                <td className="py-3 px-4 text-sm text-gray-600 border-b">{service.rateLimits}</td>
                <td className="py-3 px-4 text-sm text-gray-600 border-b">{service.restrictions}</td>
                <td className="py-3 px-4 text-sm text-gray-600 border-b">{service.creditCard}</td>
                <td className="py-3 px-4 text-sm text-gray-600 border-b">{service.openSource}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesTable;