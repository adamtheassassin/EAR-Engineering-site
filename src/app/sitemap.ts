import { MetadataRoute } from 'next';
import { execSync } from 'child_process';
import path from 'path';

const cache = new Map<string, Date | undefined>();

function getFileLastModified(routePath: string): Date | undefined {
    const filePath = path.join(process.cwd(), 'src', 'app', routePath === '' ? 'page.tsx' : `${routePath}/page.tsx`);
    
    if (cache.has(filePath)) {
        return cache.get(filePath);
    }

    try {
        const stdout = execSync(`git log -1 --format=%cI -- "${filePath}"`, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] });
        const dateStr = stdout.trim();
        
        if (dateStr) {
            const date = new Date(dateStr);
            cache.set(filePath, date);
            return date;
        }
    } catch (error) {
        // Ignore errors (e.g. git not available, or file not in git)
    }

    cache.set(filePath, undefined);
    return undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://earengineering.co.za';

    return [
        {
            url: baseUrl,
            lastModified: getFileLastModified(''),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: getFileLastModified('contact'),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/areas`,
            lastModified: getFileLastModified('areas'),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/areas/somerset-west`,
            lastModified: getFileLastModified('areas/somerset-west'),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: getFileLastModified('services'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/ac-installation`,
            lastModified: getFileLastModified('ac-installation'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/electrical-services`,
            lastModified: getFileLastModified('electrical-services'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/electrical-services/coc`,
            lastModified: getFileLastModified('electrical-services/coc'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/electrical-services/db-board-upgrades-and-repairs`,
            lastModified: getFileLastModified('electrical-services/db-board-upgrades-and-repairs'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/electrical-services/generator-installation`,
            lastModified: getFileLastModified('electrical-services/generator-installation'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solar`,
            lastModified: getFileLastModified('solar'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solar/battery-storage`,
            lastModified: getFileLastModified('solar/battery-storage'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solar/inverter-installation`,
            lastModified: getFileLastModified('solar/inverter-installation'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solar/off-grid-solar`,
            lastModified: getFileLastModified('solar/off-grid-solar'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solar/solar-installation`,
            lastModified: getFileLastModified('solar/solar-installation'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solar/solar-repair-maintenance`,
            lastModified: getFileLastModified('solar/solar-repair-maintenance'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
