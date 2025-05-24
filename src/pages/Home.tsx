import { Component } from 'preact';

import { Fonts } from '#/lib/constants';
import { Signature } from '#/components/assets/Signature';
import { Foreground } from '#/components/Foreground';
import { Discord, GitHub, XTwitter } from '#/components/assets/Icons';

import '#/styling/pages/home.scss';

export class Home extends Component {
    render() { 

        return <Foreground>
            <div class="home">
                {/* <div class="signature">
                    <Signature />
                </div> */}
                <div class="about-me">
                    <a class={`${Fonts.Weights.Montserrat900} ${Fonts.Sizes.Montserrat24px}`}>Hey, I'm Cormac!</a>
                    <a class={`${Fonts.Weights.Montserrat500} ${Fonts.Sizes.Montserrat16px}`}>I build indie games, fly RC planes, and aim to fly real planes.</a>
                </div>
            </div>
        </Foreground>
    }
}