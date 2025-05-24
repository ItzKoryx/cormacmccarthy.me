import { Component } from "preact";

type IconProps = {
    scale?: number;
    viewbox: `${number} ${number} ${number} ${number}`;
    size: [number, number];
    paths: string[];
    class?: string; // Add class prop
}

export class IconComponent extends Component<IconProps> {
    constructor(props: IconProps) {
        super(props);
    }

    render() {
        const { scale, size, paths, viewbox, class: className } = this.props; // Destructure class prop

        return <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            fill-rule="evenodd"
            width={size[0] * (scale || 1)}
            height={size[1] * (scale || 1)}
            viewBox={viewbox}
            class={className} // Apply class to SVG
        >
            {paths.map((path, i) => (
                <path key={i} d={path} />
            ))}
        </svg>
    }
}