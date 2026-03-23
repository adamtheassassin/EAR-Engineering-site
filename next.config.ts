import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // 1. Core SEO redirects
      {
        source: '/electricians-in-cape-town',
        destination: '/services/electrical-services',
        permanent: true,
      },
      
      // 2. Product Category Redirects
      {
        source: '/product-category/generators',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/product-category/generators/page/1',
        destination: '/services/electrical-services',
        permanent: true,
      },

      // 3. Solar & Battery Products
      {
        source: '/product/canadian-solar-144-cell-555w-n-type-module-tophiku6-t6-connector-700-per-container-35per-pallet',
        destination: '/services/solar-installation',
        permanent: true,
      },
      {
        source: '/product/ja-solar-144-cell-555w-gapless-ribbon-pro-series',
        destination: '/services/solar-installation',
        permanent: true,
      },
      {
        source: '/product/photon-portable-power-station-1000w-non-ups',
        destination: '/services/solar-installation',
        permanent: true,
      },
      {
        source: '/product/dehn-dehncombo-dcb-ypv-1200',
        destination: '/services/solar-installation',
        permanent: true,
      },
      {
        source: '/product/sunsynk-battery-lfp-wall-mount-15-97kwh-51-2v',
        destination: '/services/solar-installation',
        permanent: true,
      },
      {
        source: '/product/sunsynk-powerbank-x-3-6kw-inverter-3-84kwh-battery-pack',
        destination: '/services/solar-installation',
        permanent: true,
      },
      {
        source: '/product/victron-multiplus-48-3000-35-50-230v-ve-bus',
        destination: '/services/solar-installation',
        permanent: true,
      },
      {
        source: '/product/bsl-battery-7kw-135ah',
        destination: '/services/solar-installation',
        permanent: true,
      },
      {
        source: '/product/ja-solar-144-half-cell-550w-bifacial-mono-perc-pv-module-short-lead',
        destination: '/services/solar-installation',
        permanent: true,
      },
      {
        source: '/product/solar-pool-pump-500w-48v-12m-h',
        destination: '/services/solar-installation',
        permanent: true,
      },
      {
        source: '/product/microcare-3-phase-pump-controller-5-5kw-380v',
        destination: '/services/solar-installation',
        permanent: true,
      },
      {
        source: '/product/victron-multiplus-48-5000-70-100-230v-ve-bus',
        destination: '/services/solar-installation',
        permanent: true,
      },
      {
        source: '/product/photon-power-station-2400w-with-ups',
        destination: '/services/solar-installation',
        permanent: true,
      },

      // 4. Air Conditioning Products
      {
        source: '/product/alliance-aqua-inverter-range',
        destination: '/services/ac-installation',
        permanent: true,
      },
      {
        source: '/product/alliance-fous34-non-inverter-midwall-split-aircon-55m2',
        destination: '/services/ac-installation',
        permanent: true,
      },
      {
        source: '/product/alliance-aqua-non-inverter-range-9000btu',
        destination: '/services/ac-installation',
        permanent: true,
      },
      {
        source: '/product/alliance-fousi36-inverter-midwall-split-aircon-55m2-36-000-btu',
        destination: '/services/ac-installation',
        permanent: true,
      },
      {
        source: '/product/new-samsung-ar6500-windfree-inverter-midwall-split-aircon',
        destination: '/services/ac-installation',
        permanent: true,
      },

      // 5. Generators & General Electrical
      {
        source: '/product/faw-23kva-3-phase-silent-diesel-generator-gko3-25',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/product/sdec-60kva-3-phase-silent-diesel-generator-gksd-66',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/product/faw-50kva-3-phase-silent-diesel-generator-gko3-55',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/product/faw-20kva-single-phase-silent-diesel-generator-gkos-22',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/product/baudouin-20kva-single-phase-silent-diesel-generator-gkb-22',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/product/faw-20kva-single-phase-supersilent-diesel-generator-gkos-22-ss',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/product/centurion-d5-smart',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/product/ready-board-light-e-l-2xmcb-sch',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/product/db1-18w-a-f-flush-metal-db-18way',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/product/synerji-auto-pressure-switch',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/product/4-5kw-super-its-residential-heat-pump',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/product/iconic-combo-socket-1-x-164-1-plus-2-x-164-2-4023-_xw',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/product/iconic-double-socket-2-x-164-2-unswitched-2x4-4022_xw',
        destination: '/services/electrical-services',
        permanent: true,
      },
      {
        source: '/security-aer-engineering',
        destination: '/services/electrical-services',
        permanent: true,
      },

      // 6. PDF & Media Catch-all
      {
        source: '/wp-content/uploads/2024/02/generator-king-sdec-60kva-gksd-66-spec-sheet.pdf',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2024/02/1-FINAL-Coldkit-and-Freezerkit_Brochure-1-1.pdf',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2024/02/generator-king-faw-20kva-gkos-22-spec-sheet.pdf',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
