import { Component, RenderableProps } from 'preact';

export class Foreground extends Component {
    render(props: RenderableProps<any>) { 
        return <div class="foreground noise">
            {props.children}
        </div>
    }
}