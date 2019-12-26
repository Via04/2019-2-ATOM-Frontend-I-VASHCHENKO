const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: 0;
            border-top: 5px solid silver;
            outline: none;
            width: 100%;
            height: 8vh;
            font-size: 24pt;
            padding: 10px 12px;
            margin: 0;
            position: fixed;
            bottom: 0;
        }

        :host {
            display: inline-block;
        }
        
    </style>
    <input type="text" placeholder="Введите сообщение...">
`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector('input');
  }

  get value() {
    return this.$input.value;
  }

  set value(value) {
    this.$input.value = value;
  }
}

customElements.define('form-input', FormInput);
