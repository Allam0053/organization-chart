class OrganizationNode extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open"});
        this.innerHTML = `<style>h3 {color: green}</style><h3>${this.innerText}</h3>`
    }
}

customElements.define("organization-node", OrganizationNode);