import { Component } from 'preact';

import { Fonts } from '#/lib/constants';
import { Foreground } from '#/components/Foreground';

import '#/styling/pages/contact.scss';
import { GMail, Phone } from '#/components/assets/Icons';

export class Contact extends Component {
    render() {
        return <Foreground>
            <div class="contact-details">
                <div class="information">
                    <a class={`${Fonts.Sizes.Montserrat32px} ${Fonts.Weights.Montserrat900}`}>Contact</a>
                    <a class={`${Fonts.Sizes.Montserrat16px} ${Fonts.Weights.Montserrat400}`}>
                        If you wish to get in contact with me, you can do so through the following.
                    </a>
                </div>
                <div class="divider"></div>
                <div class="contact">
                    <GMail/>
                    <div class="contact-info">
                    <a target="_blank" href="mailto:cormacjustinmccarthy@gmail.com" class={`link ${Fonts.Sizes.Montserrat16px} ${Fonts.Weights.Montserrat600}`}>cormacjustinmccarthy@gmail.com</a>
                    </div>
                </div>
                <div class="contact">
                    <Phone/>
                    <div class="contact-info">
                        <a target="_blank" href="tel:+61435159039" class={`link ${Fonts.Sizes.Montserrat16px} ${Fonts.Weights.Montserrat600}`}>+61 0435 159 039</a>
                    </div>
                </div>
            </div>
        </Foreground> 
    }
}