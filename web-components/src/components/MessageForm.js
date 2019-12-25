const template = document.createElement('template')
template.innerHTML = `
    <style>
        form-input {
            width: auto;
        }


        .result {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding: 50px;
            overflow: hidden;
            margin-top: 80px;
            margin-bottom: 80px;
        }


        input[type=submit] {
            visibility: collapse;
        }


        .header {
            background: rgb(148,0,211);
            height: 7vh;
            font-size: 4vh;
            font-weight: bold;
            width: 100vw;
            position: fixed;
            top: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .name {
          text-align: center;
          flex: 2;
        }

        .exit {
          background-color: rgb(148,0,211);
          // border: none;
          padding-left: 2vh;
          flex: 0;
        }
    </style>
    <form>
        <div class="header">
            <div class='exit'><img src="https://img.icons8.com/material-two-tone/48/000000/left.png"></div>
            <p class="name"></p>
        </div>
        <div class="result"></div>
        <form-input></form-input>
    </form>
`

class MessageForm extends HTMLElement {
  constructor() {
<<<<<<< HEAD
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$form = this.shadowRoot.querySelector('form');
    this.$input = this.shadowRoot.querySelector('form-input');
    this.$result = this.shadowRoot.querySelector('.result');
    this.$name = this.shadowRoot.querySelector('.name');
    this.$exit = this.shadowRoot.querySelector('.exit');

    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this.onKeyPress.bind(this));
  }

  connectedCallback() {
    JSON.parse(localStorage.getItem(this.getAttribute('name'))).forEach((element) => {
      const $message = document.createElement('message-container');
      [$message.message, $message.date] = element;
      this.$result.appendChild($message);
    });
    this.$name.innerHTML = this.getAttribute('name');
    this.$exit.addEventListener('click', this.exitToMain.bind(this));
  }

  static get observedAttributes() {
    return ['name'];
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.$input.value.length > 0) {
      const date = new Date();
      let minutes = date.getMinutes().toString();
      if (minutes.length < 2) {
        minutes = `0${minutes}`;
      }
      let hours = date.getHours().toString();
      if (hours.length < 2) {
        hours = `0${hours}`;
      }
      const time = `${hours}:${minutes}`;
      const data = JSON.parse(localStorage.getItem(this.getAttribute('name')));
      data.push([this.$input.value, time]);
      localStorage.setItem(this.getAttribute('name'), JSON.stringify(data));
      const $message = document.createElement('message-container');
      $message.message = this.$input.value;
      $message.date = time;
      this.$result.appendChild($message);
      this.$input.value = '';
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }

  set exit(value) {
    this.exitToMain = value;
  }
=======
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this.$form = this._shadowRoot.querySelector('form')
    this.$input = this._shadowRoot.querySelector('form-input')
    this.$result = this._shadowRoot.querySelector('.result')

    this.$form.addEventListener('submit', this._onSubmit.bind(this))
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this))
    const messages = localStorage.getItem('messages')
    if (messages === null) {
      localStorage.setItem('messages', JSON.stringify([]))
    } else {
      JSON.parse(messages).forEach((element) => {
        const $message = document.createElement('message-container')
        $message.setAttribute('message', element[0])
        $message.setAttribute('date', element[1])
        this.$result.appendChild($message)
      })
    }
  }

  _onSubmit(event) {
    event.preventDefault()
    let minutes
    let hours
    if (this.$input.value.length > 0) {
      const date = new Date()
      minutes = date.getMinutes().toString()
      if (minutes.length < 2) {
        minutes = `0${minutes}`
      }
      hours = date.getHours().toString()
      const time = `${hours}:${minutes}`
      const messages = JSON.parse(localStorage.getItem('messages'))
      messages.push([this.$input.value, time])
      localStorage.setItem('messages', JSON.stringify(messages))
      const $message = document.createElement('message-container')
      $message.message = this.$input.value
      $message.date = time
      this.$result.appendChild($message)
      this.$input.value = ''
      window.scrollTo(0, this.$result.scrollHeight)
    }
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'))
    }
  }
>>>>>>> a3d67b98721a5912aaabc49cd93f0f4f31f1f77c
}

customElements.define('message-form', MessageForm)
