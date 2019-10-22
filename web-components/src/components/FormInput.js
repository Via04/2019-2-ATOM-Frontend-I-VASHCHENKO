const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: 0;
            border-top: 5px solid gray;
            outline: none;
            width: calc(100% - 2px);
            height: 40px;
            font-size: 50px;
            padding: 25px 50px;
            margin: 0;
            position: fixed;
            bottom: 0;
        }

        :host {
            display: inline-block;
        }
    </style>
    <input type="text">
`;

class FormInput extends HTMLElement {
    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.$input = this.shadowRoot.querySelector('input');
    }

    static get observedAttributes() {
        return ['name', 'value', 'placeholder', 'disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.$input.setAttribute(name, newValue);
    }

    get value() {
        return this.$input.value;
    }

    set value(newValue) {
        this.$input.value = newValue;
    }
}

customElements.define('form-input', FormInput);
