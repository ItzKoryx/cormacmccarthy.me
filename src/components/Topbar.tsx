import { Component } from "preact"; 
import { Context, Fonts, Pages } from '#/lib/constants';

export class Topbar extends Component {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return <Context.App.Consumer>{({ currentPath }) =>
            <div class="topbar">
                <div class="site-nav">
                    {Pages.map(({ path, location }, index) => (<>
                        <div
                            class={`nav-item 
                                ${currentPath.endsWith(path)
                                    ? `nav-active`
                                    : ``
                                } ${Fonts.Sizes.Montserrat16px} ${Fonts.Weights.Montserrat800}`
                            }
                        >
                            <a href={path}>{location}</a>
                        </div>
                        {index !== Pages.length - 1 && <div class="nav-divider"></div>}
                    </>))}
                </div>
            </div>
        }</Context.App.Consumer>
    }
}