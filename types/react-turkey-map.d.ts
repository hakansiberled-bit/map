declare module 'react-turkey-map' {
    import { ComponentType } from 'react';

    export interface TurkeyMapProps {
        hoverable?: boolean;
        onClick?: (cityName: string) => void;
        onHover?: (cityName: string) => void;
        customStyle?: {
            idleColor?: string;
            hoverColor?: string;
            selectedColor?: string;
        };
        width?: string | number;
        height?: string | number;
    }

    const TurkeyMap: ComponentType<TurkeyMapProps>;
    export default TurkeyMap;
}
