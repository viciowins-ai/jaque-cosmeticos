import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Jaque Cosméticos',
        short_name: 'Jaque',
        description: 'Compre produtos O Boticário online com facilidade',
        start_url: '/',
        display: 'standalone',
        background_color: '#fcfbf9',
        theme_color: '#526f5d',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
