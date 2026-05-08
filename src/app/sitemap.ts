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
            url: `${baseUrl}/services/ac-installation`,
            lastModified: getFileLastModified('services/ac-installation'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/electrical-services`,
            lastModified: getFileLastModified('services/electrical-services'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/electrical-services/coc`,
            lastModified: getFileLastModified('services/electrical-services/coc'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/electrical-services/db-board-upgrades-and-repairs`,
            lastModified: getFileLastModified('services/electrical-services/db-board-upgrades-and-repairs'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/electrical-services/generator-installation`,
            lastModified: getFileLastModified('services/electrical-services/generator-installation'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/solar`,
            lastModified: getFileLastModified('services/solar'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/solar/battery-storage`,
            lastModified: getFileLastModified('services/solar/battery-storage'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/solar/inverter-installation`,
            lastModified: getFileLastModified('services/solar/inverter-installation'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/solar/off-grid-solar`,
            lastModified: getFileLastModified('services/solar/off-grid-solar'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/solar/solar-installation`,
            lastModified: getFileLastModified('services/solar/solar-installation'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/solar/solar-repair-maintenance`,
            lastModified: getFileLastModified('services/solar/solar-repair-maintenance'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
