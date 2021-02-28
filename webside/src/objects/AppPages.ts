import {faHome, faShoppingCart, faTractor} from "@fortawesome/free-solid-svg-icons";

export interface AppPage {
    url: string;
    icon: any;
    title: string;
}

export const pages: AppPage[] = [
    {
        title: 'Interviews',
        url: '/interviews',
        icon: faHome,
    },
    {
        title: 'Training',
        url: '/training',
        icon: faTractor,
    },
    {
        title: 'Teams',
        url: '/teams',
        icon: faShoppingCart,
    },
    {
        title: 'Kontakt',
        url: '/kontakt',
        icon: faShoppingCart,
    },
    {
        title: 'Sponsoren',
        url: '/sponsoren',
        icon: faShoppingCart,
    },

];