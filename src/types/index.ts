// Tipos comuns que podem ser reutilizados
export interface NavItem {
    label: string;
    href: string;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface StepItem {
    id: number;
    title: string;
    icon?: React.ElementType; // Para ícones como componentes
}

export interface DestinationCardItem {
    id: string;
    imageUrl: string;
    name: string;
}

export interface PackageCardItem {
    id: string;
    imageUrl: string;
    title: string;
    price: string;
    details: string[];
}