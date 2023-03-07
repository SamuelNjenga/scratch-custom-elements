// Create custom HTML Element
class ActivityItem extends HTMLElement {
  constructor() {
    super(); // Makes sure we calling HTMLElement constructor
    // set up our todo item
    this.innerHTML = "Hi I am custom";
  }
}
// Register custom element with the dom
customElements.define("activity-item", ActivityItem);
