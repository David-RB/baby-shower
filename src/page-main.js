import { LitElement, html, css } from 'lit';
import './gift-card';

class PageMain extends LitElement {

    static properties = {
    }

    static styles = css`
        .container {
            width: 100%;
            margin: 0 auto;
        }

        @media only screen and (max-width: 760px) {
            .container {
                width: 98%;
            }
        }

    `;

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="container">
                <gift-card></gift-card>
            </div>
        `;
    }

}

customElements.define('page-main', PageMain);