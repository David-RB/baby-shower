import { LitElement, html, css } from 'lit';

const title = new URL('../assets/baby-sh.svg', import.meta.url).href;

class PageHeader extends LitElement {
    
    static properties = {
    }

    static styles = css`
        .title {
            width: 550px;
            max-width: 100%;
            margin-top: -125px;
            margin-bottom: -150px;
        }

        .header {
            color: rgb(42 172 213);
            font-synthesis: none;
        }

        h1 {
            margin-top: -15px;
            text-shadow: #565656 -1px 0px, #565656 0px 1px, #565656 1px 0px, #565656 0px -1px;
            border-bottom: ridge;
        }
    `;

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="header">
                <img class="title" src=${title} alt="Baby Shower"/>
                <h1>Lista de Deseos</h1>
            </div>

        `;
    }
}

customElements.define('page-header', PageHeader);