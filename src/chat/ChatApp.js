import Component from '../Component.js';
import Header from '../shared/Header.js';
import MakeMessage from './MakeMessage.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const makeMessage = new MakeMessage();
        main.appendChild(makeMessage.render());

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
        <div>
            <main></main>
        </div>
            
    `;
    }
}

export default ChatApp;