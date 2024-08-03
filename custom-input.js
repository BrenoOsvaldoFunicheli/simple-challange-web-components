class CustomInput extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // Create a shadow root
    // The custom element itself is the shadow host
    const shadow = this.attachShadow({ mode: "open" });

    // create the internal implementation
    const div = document.createElement('div')
    div.classList.add('div-input')

    // creating label
    const label = document.createElement('label')
    const input_id = this.getAttribute('id') || 'number';
    label.setAttribute('for', input_id)
    label.innerHTML = 'ds'

    div.appendChild(label)

    const input = document.createElement('input')
    const input_type = this.getAttribute('type') || 'number';
    input.setAttribute('type', input_type)
    input.setAttribute('id', input_id)


    div.appendChild(input);

    style = document.createElement('style')
    style.textContent = `
      label {
        margin-bottom: 4px;
      }

      input[type] {
        padding: 8px;
        border-radius: 3px;
      }

      input[type="number"] {
        width: 100%;
      }
      
    `

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(div)
  }
}

customElements.define("custom-input", CustomInput);
