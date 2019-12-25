const template = document.createElement('template');
template.innerHTML = `
    <style>
        .message {
            font-size: 50px;
            font-family: Segoe UI;
            overflow-wrap: break-word;
            white-space: pre-wrap;
            line-height: 45px;
        }

        .date {
            display: inline-block;
            font-size: 30px;
            font-style: italic;
        }

        .wrapper {
            background: rgb(225,235,232);
            border-radius: 15px;
            width: auto;
            padding: 15px;
            margin-bottom: 50px;
            max-width: 700px;
            transition: opacity, background 1s ease;
            animation-name: appear;
            animation-duration: 1s;
            animation-iteration-count: 1;
            animation-timing-function: ease;
        }
        
        @keyframes appear {
            from {
                transform: translate(1000px , 0);
            }
            to {
                transform: translate(0px , 0);
            }
        }
        
        @-webkit-keyframes appear {
            from {
                -webkit-transform: translate(1000px , 0);
            }
            to {
                -webkit-transform: translate(0px , 0);
            }
        }
        
        .wrapper:hover {
            background: rgb(0, 182, 227);
        }
    </style>
    <div class="wrapper">
        <p class="message"></p>
        <span class="date"></span>
    </div>
`;

class MessageContainer extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$message = this.shadowRoot.querySelector('.message');
    this.$date = this.shadowRoot.querySelector('.date');
  }

  set message(value) {
    this.$message.innerHTML = value;
  }

  set date(value) {
    this.$date.innerHTML = value;
  }
}

customElements.define('message-container', MessageContainer);
