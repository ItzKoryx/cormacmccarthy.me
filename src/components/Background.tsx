import { Component, RenderableProps } from 'preact';

import { StarTrails } from '#/components/assets/StarTrails';
import { Context } from '#/lib/constants';

export class Background extends Component<{}> {
    constructor(props: {}) {
        super(props);
    }

    render(props: RenderableProps<any>) { 
        return <div class="background">
            <Context.App.Consumer>{({ currentHeight, aspectRatio }) => (
                <div
                    class="star-trails"
                    style={{
                        width: `${currentHeight * aspectRatio}px`,
                        height: `${currentHeight}px`,
                    }}
                >
                    <StarTrails></StarTrails>
                </div> 
            )}</Context.App.Consumer>
            <div id="mouse-shadow" />
            {props.children}
        </div>
    }
}