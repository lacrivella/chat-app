import Component from '../Component.js';
import Header from '../shared/Header.js';
import MakeMessage from './MakeMessage.js';
import QUERY from '../QUERY.js';
import { roomsRef } from '../services/firebase.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'ChatRoom' });
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const searchParams = QUERY.parse(window.location.search.slice(1));
        const roomRef = roomsRef.child(searchParams.key);

        const makeMessage = new MakeMessage({ roomRef });
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