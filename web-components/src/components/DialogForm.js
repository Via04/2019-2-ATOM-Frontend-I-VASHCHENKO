const template = document.createElement("template");
template.innerHTML = `
    <style>
        .create_chat {
            background-color: #ff05d8;
            position: fixed;
            top: 90vh;
            left: 90vw;
        }

        .dialog_container {
            width: 100%;
            background: #dac6eb;
            padding-top: 9vh;
            display: flex;
            flex-direction: column-reverse;
        }
    </style>
    <dialog-header></dialog-header>
    <div class='dialog_container'></div>
    <button><img src="https://img.icons8.com/dusk/64/000000/create-new.png"></button>
    <form></form>
`;

class MainScreen extends HTMLElement {
    constructor() {
        super();
        this.inputStatus = false;
        this.oldSort = [];
        this.curSort = [];
        this.shadowRoot = this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.$dialog = this.shadowRoot.querySelector('.dialog_container');
        this.$addChat = this.shadowRoot.querySelector('.create_chat');
        this.$nameInput = this.shadowRoot.querySelector('form');
        this.$search = this.shadowRoot.querySelector('dialog-header');

        this.$addChat.addEventListener('click', this.onclick.bind(this));
        this.$nameInput.addEventListener('submit', this.onsubmit.bind(this));
        this.$nameInput.addEventListener('keypress', this.onkeypress.bind(this));
    }

    connectedCallback() {
        const data = localStorage.getItem('users');
        if (data === null) {
            localStorage.setItem('users', JSON.stringify([]));
        } else {
            JSON.parse(data).forEach((element) => {
                const $chat = document.createElement('dialog-container');
                $chat.name = element;
                const arr = JSON.parse(localStorage.getItem(element));
                if (arr.length > 0) {
                    [$chat.message, $chat.date] = arr.slice(-1)[0];
                    $chat.check = '&#10003';
                } else {
                    $chat.date = '';
                    $chat.message = '';
                }
                $chat.addEventListener('click', this.enterDialog.bind(this, element));
                this.$dialog.appendChild($chat);
            });
        }
        this.$search.find = (name) => {
            this.setAttribute('name', name);
        };
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.arr = [];
        JSON.parse(localStorage.getItem('users')).forEach((element) => {
            if (element.slice(0, newValue.length) === newValue) {
                this.arr.push(element);
            }
        });
        this.$dialog.innerHTML = '';
        this.arr.forEach((element) => {
            const $chat = document.createElement('dialog-container');
            $chat.name = element;
            const arr = JSON.parse(localStorage.getItem(element));
            if (arr.length > 0) {
                [$chat.message, $chat.date] = arr.slice(-1)[0];
                $chat.check = '&#10003';
            } else {
                $chat.date = '';
                $chat.message = '';
            }
            $chat.addEventListener('click', this.enterDialog.bind(this, element));
            this.$dialog.appendChild($chat);
        });
    }

    onclick() {
        if (this.inputStatus) {
            const $input = this.shadowRoot.querySelector('dialog-input');
            $input.remove();
            this.inputStatus = false;
        } else {
            const $input = document.createElement('dialog-input');
            this.$nameInput.appendChild($input);
            this.inputStatus = true;
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const $input = this.shadowRoot.querySelector('dialog-input');
        if ($input.value !== '') {
            const data = JSON.parse(localStorage.getItem('users'));
            if (data.includes($input.value)) {
                alert('Данный диалог уже существует');
            } else {
                data.push($input.value);
                localStorage.setItem('users', JSON.stringify(data));
                localStorage.setItem($input.value, JSON.stringify([]));
                const $chat = document.createElement('dialog-container');
                $chat.name = $input.value;
                $chat.date = '';
                $chat.message = '';
                $chat.addEventListener('click', this.enterDialog.bind(this, $input.value));
                this.$dialog.appendChild($chat);
                $input.value = '';
            }
        } else {
            alert('Введите название диалога');
        }
    }

    onKeyPress(event) {
        if (event.keyCode === 13) {
            this.$name_input.dispatchEvent(new Event('submit'));
        }
    }

    set     enter(value) {
        this.enterDialog = value;
    }
}

customElements.define('main-screen', MainScreen);
