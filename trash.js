class DirectorNode extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML =
            `
            <style>
            ${globalStyles}

            .administration > li > a{
                margin-bottom: 25px;
            }

            .director > li > a{
                width: 50%;
                margin: 0 auto 0px auto;
            }
            
            ul{
                padding: 0;
                margin: 0;
                list-style: none;		
            }
            
            ul a{
                display: block;
                background: #ccc;
                border: 4px solid #fff;
                text-align: center;
                overflow: hidden;
                font-size: .7em;
                text-decoration: none;
                font-weight: bold;
                color: #333;
                height: 70px;
                margin-bottom: -26px;
                box-shadow: 4px 4px 9px -4px rgba(0,0,0,0.4);
                -webkit-transition: all linear .1s;
                -moz-transition: all linear .1s;
                transition: all linear .1s;
            }
            
            @media print {
                ul a{
                    border: 4px solid #000;
                }
            }
            
            @media screen and (max-width: 767px){
                ul a{
                    font-size: 1em;
                }
            }
            
            
            ul a span{
                top: 50%;
                margin-top: -0.7em;
                display: block;
            }
            </style>
            <ul class="director">
                <li>
                    <a href="#" class="dir"><span>Director</span></a>
                    <ul class="subdirector">
                        <slot name="subdirector"></slot>
                    </ul>
                    <ul class="departments cf">
                        <slot name="departments"></slot>
                    </ul>
                </li>
            </ul>
            `
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}