import React from 'react';
import { servicesData } from './servicesData';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Free Services for Hobbyist Developers</h1>
      <div className="w-full max-w-7xl mb-8 px-4">
       
        <p className="text-gray-600 leading-relaxed mb-4">
          The world of coding is more accessible than ever, thanks to a treasure trove of free resources tailored for hobbyist developers. These tools—ranging from hosting platforms to databases—empower anyone with a laptop and a dream to build apps, websites, or APIs without breaking the bank. The open-source community and generous free tiers from companies like Vercel (where hacloco.org currently sits for free), Supabase, and Let’s Encrypt mean you can experiment, learn, and deploy real projects at no cost. My favorites? Supabase for its seamless PostgreSQL database and clerk for easy oAuth authentication, perfect for quick throw-away deployments and practice projects. Vercel’s free tier is a gem for deploying Next.js apps with zero hassle. And <a href="https://community.letsencrypt.org/t/ssl-certificate-for-ngrok-subdomain/182362" style={{ color: 'blue', textDecoration: 'underline' }}>Let’s Encrypt paired with ngrok</a> keeps your self-hosted sites secure with  SSL certificates. These resources level the playing field, letting hobbyists turn ideas into reality. Below, explore a curated list of free services to fuel your next project. As the more and more coding is done by robots, it's becoming increasingly important to understand how to integrate and utilize services, APIs and libraries. This list is a great starting point for anyone looking to get into coding or expand their skill set.
          </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          It's a work in progress and will be updated as I find new services. If you have any suggestions, send us a DM on bluesky [@hacloco.org].  
          Also, it was compiled by an LLM so if you find any errors, let me know.
          </p></div>
        
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto max-h-[600px]">
          <table className="min-w-full table-auto">
            <thead className="sticky top-0 bg-gray-200">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Service</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Type</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Free Tier Details</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Size Limits</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Rate Limits</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Restrictions</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Credit Card</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Open Source</th>
              </tr>
            </thead>
            <tbody>
              {servicesData.map((service, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-sm text-gray-600">{service.service}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{service.type}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{service.freeTier}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{service.sizeLimits}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{service.rateLimits}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{service.restrictions}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{service.creditCard}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{service.openSource}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;