// Create template
const template = document.createElement("template");

// template.innerHTML = `
//   <style>
//    h3 { color: green}
//   </style>
//   <h3 data-title></h3>
//   `;

template.innerHTML = `
  <style>
   h3 { color: green}
  </style>
  <h3>
  <slot></slot>
  </h3>
  `;

template.innerHTML = `
  <style>
   label { color: red;
   display: block;
}
.description {
    font-size: .65rem;
    font-weight: lighter;
    color: #777;
}
  </style>
  <label>
  <input type="checkbox" />
  <slot></slot>
  <span class="description">
  <slot name="description">
  </slot>
  </span>
  </label>
  `;

// Create custom HTML Element
class ActivityItem extends HTMLElement {
  constructor() {
    super(); // Makes sure we calling HTMLElement constructor
    // set up our todo item
    // this.innerHTML = "Hi I am custom";
    // this.innerHTML = `<h3>${this.innerText}</h3>`;
    const shadow = this.attachShadow({ mode: "open" });
    // Make sure you clone everything inside of the template
    shadow.append(template.content.cloneNode(true));
    // Get anything inside of our shadow
    // this.title = shadow.querySelector("[data-title]")
    // this.title.innerText = this.innerText
    // this.innerHTML = `<style>h3{color:green}</style><h3>${this.innerText}</h3>`;
  }
}
// Register custom element with the dom
customElements.define("activity-item", ActivityItem);
