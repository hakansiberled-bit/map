declare module 'react-simple-maps' {
    import { ComponentType, SVGProps } from 'react';

    export interface ComposableMapProps {
        projection?: string;
        projectionConfig?: {
            scale?: number;
            center?: [number, number];
        };
        style?: React.CSSProperties;
        className?: string;
        children?: React.ReactNode;
    }

    export interface GeographiesProps {
        geography: string;
        children: (data: { geographies: any[] }) => React.ReactNode;
    }

    export interface GeographyProps {
        geography: any;
        onClick?: () => void;
        style?: {
            default?: Record<string, any>;
            hover?: Record<string, any>;
            pressed?: Record<string, any>;
        };
    }

    export const ComposableMap: ComponentType<ComposableMapProps>;
    export const Geographies: ComponentType<GeographiesProps>;
    export const Geography: ComponentType<GeographyProps>;
}