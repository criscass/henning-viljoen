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

export const siteConfigEn: SiteConfig = {
    logo: {
        src: '/logo.png',
        alt: 'Henning Viljoen logo'
    },
    title: 'Henning Viljoen',
    subtitle: 'Sole Practitioner',
    description: 'Labour Law matters, the drafting of Wills and administration of deceased estates, transfer of fixed property and conveyancing matters. ',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Henning Viljoen sitting at his desk with a client'
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
        title: 'My mission is to serve everyone with integrity and honesty',
        text: 'Being a single attorney in my firm, without assistants or para-legals, I am hands-on and attend daily to each and every aspect of the cases and matters I deal with - in other words, the buck stops with me. I limit my services to Labour Law matters, the drafting of Wills and administration of deceased estates, the transfer of fixed property and conveyancing matters and notarial contracts like ante nuptial contracts. I am often consulted about civil law disputes and I make a point of explaining to clients that the preferred route to go is alternative dispute resolution, like mediation, with a proven advantage of time and costs to solve these disputes.',
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

export const siteConfigAf: SiteConfig = {
    logo: {
        src: '/logo.png',
        alt: 'Henning Viljoen logo'
    },
    title: 'Henning Viljoen',
    subtitle: 'Enkelpraktisyn',
    description: "My missie is om met integriteit en eerlikheid 'n diens aan elkeen te lewer",
    image: {
        src: '/dante-preview.jpg',
        alt: "Henning Viljoen sit agter sy lessenaar besig met 'n kliënt"
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/af/'
        },
        {
            text: 'About',
            href: '/af/about'
        },
        {
            text: 'Contact',
            href: '/af/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/af/about'
        },
        {
            text: 'Contact',
            href: '/af/contact'
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
        title: "My missie is om met integriteit en eerlikheid 'n diens aan elkeen te lewer",
        text: "As 'n enkelprokureur in my firma, sonder kandidaat-prokureurs of assistente, is ek prakties betrokke by, en hanteer ek daagliks elke aspek van, die sake en aangeleenthede waarmee ek te doen het - met ander woorde, die verantwoordelikheid rus alleen op my skouers. Ek beperk my dienste tot arbeidsreg sake, die opstel van testamente en die administrasie van bestorwe boedels, die oordrag van vaste eiendom en regskwessies aangaande eiendomsoordrag, asook notariële kontrakte soos huweliksvoorwaardes. Ek word dikwels geraadpleeg oor siviele regsgeskille en ek maak dit 'n punt om aan kliënte te verduidelik dat die verkose roete om te volg alternatiewe geskilbeslegting is, soos mediasie, met 'n bewese voordeel van tyd en koste om hierdie geskille op te los.",
        image: {
            src: '/hero.jpeg',
            alt: 'Attorney showing two clients something on a laptop'
        },
        actions: [
            {
                text: 'Kontak my',
                href: '/af/contact'
            }
        ]
    }
};
