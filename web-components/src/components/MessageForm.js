const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: auto;
        }

        .top-panel {
            background: darkviolet;
            /*min-height: 80px;*/
            width: 100%;
            position: fixed;
            top: 0;
            display: table-cell;
            vertical-align: middle;
            height: 80px;
        }
        
        .result {
            background: #dac6eb;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding: 50px;
            overflow: hidden;
            margin-top: 80px;
            margin-bottom: 30px;
        }

        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <form>
        <div style="display: table; width: 100%">
            <div class="top-panel">
                <h1 style="text-align: center;">Chat header</h1>
            </div>
        </div>
        <div class="result"></div>
        <form-input name="message-text" placeholder="Введите сообщение"></form-input>
    </form>
`;

class MessageForm extends HTMLElement {
	constructor() {
		super();
		this._shadowRoot = this.attachShadow({ mode: 'open' });
		this._shadowRoot.appendChild(template.content.cloneNode(true));
		this.$form = this._shadowRoot.querySelector('form');
		this.$input = this._shadowRoot.querySelector('form-input');
		this.$result = this._shadowRoot.querySelector('.result');

		this.$form.addEventListener('submit', this._onSubmit.bind(this));
		this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
		const messages = localStorage.getItem('messages');
		if (messages === null) {
			localStorage.setItem('messages', JSON.stringify([]));
		} else {
			JSON.parse(messages).forEach((element) => {
				const $message = document.createElement('message-container');
				$message.setAttribute('message', element[0]);
				$message.setAttribute('date', element[1]);
				this.$result.appendChild($message);
			});
		}
	}

	_onSubmit(event) {
		event.preventDefault();
		let minutes;
		let hours;
		if (this.$input.value.length > 0) {
			const date = new Date();
			minutes = date.getMinutes().toString();
			if (minutes.length < 2) {
				minutes = `0${minutes}`;
			}
			hours = date.getHours().toString();
			const time = `${hours}:${minutes}`;
			const messages = JSON.parse(localStorage.getItem('messages'));
			messages.push([this.$input.value, time]);
			localStorage.setItem('messages', JSON.stringify(messages));
			const $message = document.createElement('message-container');
			$message.message = this.$input.value;
			$message.date = time;
			this.$result.appendChild($message);
			this.$input.value = '';
			window.scrollTo(0, this.$result.scrollHeight);
		}
	}

	_onKeyPress(event) {
		if (event.keyCode === 13) {
			this.$form.dispatchEvent(new Event('submit'));
		}
	}
}

customElements.define('message-form', MessageForm);
