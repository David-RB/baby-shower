import { LitElement, html, css } from 'lit';
import './page-header';
import './page-main';

class BabyShower extends LitElement {
	
	static properties = {

	}
	
	static styles = css`
		:host {
			min-height: 100vh;
			display: flex;
			flex-direction: column;
			font-size: calc(10px + 2vmin);
			color: #1a2b42;
			max-width: 1006px;
			margin: 0 auto;
			text-align: center;
		}

		.app-footer {
			font-size: calc(12px + 0.5vmin);
			align-items: center;
		}

		.app-footer a {
			margin-left: 5px;
		}
	`;
	
	constructor() {
		super();
	}
	
	render() {
		return html`
			<page-header></page-header>
			<page-main></page-main>
		`;
	}
}

customElements.define('baby-shower', BabyShower);