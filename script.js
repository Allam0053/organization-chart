class OrganizationNode extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        this.innerHTML = `<style>h3 {color: green}</style><h3>${this.innerText}</h3>`
    }
}

const globalStyles = 
`
*{
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	position: relative;
}

.cf:before,
.cf:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.cf:after {
    clear: both;
}

/**
 * For IE 6/7 only
 * Include this rule to trigger hasLayout and contain floats.
 */
.cf {
    *zoom: 1;
}

/* Generic styling */

body{
	background: #F5EEC9;	
}

.content{
	width: 100%;
	max-width: 1142px;
	margin: 0 auto;
	padding: 0 20px;
}

a:focus{
	outline: 2px dashed #f7f7f7;
}

@media screen and (max-width: 767px){
	.content{
		padding: 0 20px;
	}	
}
`

// <!-- Director Component -->


class DepartmentNode extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML =
            `
            <ul id="department-template">
                <li class="department">
                    <a href="#"><span>Director</span></a>
                    <ul class="sections">
                        <slot name="sections"></slot>
                    </ul>
                </li>
            </ul>
            `
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(this.template.cloneNode(true));
    }
}

class SectionNode extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML =
            `
            <ul id="section-template">
                <li class="section"><a href="#"><span></span></a></li>
            </ul>
            `
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(this.template.cloneNode(true));
    }
}



//  <!-- Department Component -->





customElements.define("organization-node", OrganizationNode);
// customElements.define('director-component', DirectorNode);
customElements.define('department-component', DepartmentNode);
customElements.define('section-component', SectionNode);