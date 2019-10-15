const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: auto;
        }

        .top-panel {
            background: darkviolet;
            height 130px;
            width: 100%;
            position: fixed;
            top: 0;
        }
        
        .result {
            background: #dac6eb;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding: 50px;
            overflow: hidden;
            margin-top: 100px;
            margin-bottom: 30px;
        }

        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <form>
        <div class="top-panel">
            <h1 style="text-align: center">Chat header</h1>
        </div>
        <div class="result"></div>
        <form-input name="message-text" placeholder="Введите сообщение"></form-input>
    </form>
`;

class MessageForm extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');
        this.$message = this._shadowRoot.querySelector('.result');

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
        const messages = localStorage.getItem('messages').split('/$#@');
        for (let element = 0; element < messages.length; element++) {
          const $content = document.createElement('message-box');
          const arr = messages[element].split('@#$%/');
          $content.authorV = arr[0];
          $content.textV = arr[1];
          $content.timeV = arr[2];
          this.$message.appendChild($content);
          this.$message.scrollTop = this.$message.scrollHeight;
        }
    }

    _onSubmit (event) {
        event.preventDefault();
        this.$input.value = this.$input.value.replace(/\s+/g, ' ').replace(/^\s|\s$/g, '');
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
