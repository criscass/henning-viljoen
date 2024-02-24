export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
};

const siteConfig: SiteConfig = {
    title: 'Henning Viljoen',
    subtitle: 'Solo Practitioner',
    description: 'Labour Law matters, the drafting of Wills and administration of deceased estates, transfer of fixed property and conveyancing matters. ',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Facebook',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Here we can write some sort of slogan or motto',
        text: 'Being a single attorney in my firm, without assistants or para-legals, I am hands-on and attend daily to each and every aspect of the cases and matters I deal with - in other words, the buck stops with me. I limit my services to Labour Law matters, the drafting of Wills and administration of deceased estates, the transfer of fixed property and conveyancing matters. I am often consulted about civil law disputes and I make a point of explaining to clients that the preferred route to go is alternative dispute resolution, like mediation, with a proven advantage of time and costs to solve these disputes.',
        image: {
            src: '/hero.jpeg',
            alt: 'Attorney showing two clients something on a laptop'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    }
};

export default siteConfig;
