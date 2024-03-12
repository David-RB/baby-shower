import { LitElement, html, css } from 'lit';
import {query} from 'lit/decorators/query.js';

class GiftCard extends LitElement {

    static properties = {
    }

    static styles = css`

        .ag-courses_box {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            padding: 50px 0;
            font-family: "Anton", sans-serif;
        }

        .ag-courses_item {
            -ms-flex-preferred-size: calc(33.33333% - 30px);
            flex-basis: calc(33.33333% - 30px);
            margin: 0 15px 30px;
            overflow: hidden;
            border-radius: 28px;
        }

        .ag-courses-item_link {
            display: block;
            padding: 30px 20px;
            background-color: #cee8ff;
            overflow: hidden;
            position: relative;
        }

        .ag-courses-item_link:hover,
        .ag-courses-item_link:hover .ag-courses-item_date {
            text-decoration: none;
            color: #FFF;
        }

        .ag-courses-item_link:hover .ag-courses-item_bg {
            -webkit-transform: scale(10);
            -ms-transform: scale(10);
            transform: scale(10);
        }

        .ag-courses-item_title {
            min-height: 80px;
            margin: 0 0 5px;
            overflow: hidden;
            font-size: 30px;
            color: rgb(1 8 102);
            z-index: 2;
            position: relative;
            display: ruby-text;
        }

        .ag-courses-item_desc-box {
            font-size: 23px;
            z-index: 2;
            position: relative;
        }

        .ag-courses-item_desc {
            color: black;
            display: ruby-text;
            -webkit-transition: color .5s ease;
            -o-transition: color .5s ease;
            transition: color .5s ease
        }

        .ag-courses-item_bg {
            height: 128px;
            width: 128px;
            background-color: #f9d834;
            z-index: 1;
            position: absolute;
            top: -75px;
            right: -75px;
            border-radius: 50%;
            -webkit-transition: all .5s ease;
            -o-transition: all .5s ease;
            transition: all .5s ease;
        }

        .ag-courses_item:nth-child(2n) .ag-courses-item_bg {
            background-color: #3ecd5e;
        }

        .ag-courses_item:nth-child(3n) .ag-courses-item_bg {
            background-color: #e44002;
        }

        .ag-courses_item:nth-child(4n) .ag-courses-item_bg {
            background-color: #2873FF;
        }

        .ag-courses_item:nth-child(5n) .ag-courses-item_bg {
            background-color: #FF903A;
        }

        .ag-courses_item:nth-child(6n) .ag-courses-item_bg {
            background-color: #DAF7A6;
        }
        
        @media only screen and (max-width: 979px) {
            .ag-courses_item {
            -ms-flex-preferred-size: calc(50% - 30px);
            flex-basis: calc(50% - 30px);
            }
            .ag-courses-item_title {
            font-size: 24px;
            }
        }
        
        @media only screen and (max-width: 639px) {
            .ag-courses_item {
            -ms-flex-preferred-size: 100%;
            flex-basis: 100%;
            }
            .ag-courses-item_title {
            min-height: 72px;
            line-height: 1;
            font-size: 24px;
            }
            .ag-courses-item_link {
            padding: 22px 40px;
            }
        }

    `;

    constructor() {
        super();
    }

    freezeBackgroundColorOne() { 
        this.renderRoot.querySelector('#select-card-1').style.backgroundColor = "#f9d834";
    }

    
    freezeBackgroundColorTwo() { 
        this.renderRoot.querySelector('#select-card-2').style.backgroundColor = "#3ecd5e";
    }

    freezeBackgroundColorThree() { 
        this.renderRoot.querySelector('#select-card-3').style.backgroundColor = "#e44002";
    }

    freezeBackgroundColorFour() { 
        this.renderRoot.querySelector('#select-card-4').style.backgroundColor = "#2873FF";
    }

    freezeBackgroundColorFive() { 
        this.renderRoot.querySelector('#select-card-5').style.backgroundColor = "#FF903A";
    }

    freezeBackgroundColorSix() { 
        this.renderRoot.querySelector('#select-card-6').style.backgroundColor = "#DAF7A6";
    }

    render() {
        return html`
            <div class="ag-courses_box">

                <div class="ag-courses_item">
                    <a id="select-card-1" href="#" class="ag-courses-item_link" onclick="javascipt:return false;" @click=${this.freezeBackgroundColorOne}>
                        <div id="color-bg" class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title anton-regular">Pañales</div>
                        <div class="ag-courses-item_desc-box">
                            <span class="ag-courses-item_desc">Etapa Cero</span>
                        </div>
                    </a>
                </div>

                <div class="ag-courses_item">
                    <a id="select-card-2" href="#" class="ag-courses-item_link" onclick="javascipt:return false;" @click=${this.freezeBackgroundColorTwo}>
                        <div id="color-bg" class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title anton-regular">Pañales</div>
                        <div class="ag-courses-item_desc-box">
                            <span class="ag-courses-item_desc">Etapa Cero</span>
                        </div>
                    </a>
                </div>

                <div class="ag-courses_item">
                    <a id="select-card-3" href="#" class="ag-courses-item_link" onclick="javascipt:return false;" @click=${this.freezeBackgroundColorThree}>
                        <div id="color-bg" class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title anton-regular">Pañales</div>
                        <div class="ag-courses-item_desc-box">
                            <span class="ag-courses-item_desc">Etapa Cero</span>
                        </div>
                    </a>
                </div>

                <div class="ag-courses_item">
                    <a id="select-card-4" href="#" class="ag-courses-item_link" onclick="javascipt:return false;" @click=${this.freezeBackgroundColorFour}>
                        <div id="color-bg" class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title anton-regular">Pañales</div>
                        <div class="ag-courses-item_desc-box">
                            <span class="ag-courses-item_desc">Etapa Cero</span>
                        </div>
                    </a>
                </div>

                <div class="ag-courses_item">
                    <a id="select-card-5" href="#" class="ag-courses-item_link" onclick="javascipt:return false;" @click=${this.freezeBackgroundColorFive}>
                        <div id="color-bg" class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title anton-regular">Pañales</div>
                        <div class="ag-courses-item_desc-box">
                            <span class="ag-courses-item_desc">Etapa Cero</span>
                        </div>
                    </a>
                </div>

                <div class="ag-courses_item">
                    <a id="select-card-6" href="#" class="ag-courses-item_link" onclick="javascipt:return false;" @click=${this.freezeBackgroundColorSix}>
                        <div id="color-bg" class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title anton-regular">Pañales</div>
                        <div class="ag-courses-item_desc-box">
                            <span class="ag-courses-item_desc">Etapa Cero</span>
                        </div>
                    </a>
                </div>

            </div>
        `;
    }
}

customElements.define('gift-card', GiftCard);