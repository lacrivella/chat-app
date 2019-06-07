import Component from '../Component.js';
import Header from '../shared/Header.js';
import MakeMessage from './MakeMessage.js';
import QUERY from '../QUERY.js';
import { roomsRef, messagesByRoomRef } from '../services/firebase.js';
import MessageList from './MessageList.js';

class ChatApp extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const searchParams = QUERY.parse(window.location.search.slice(1));
        const messagesByRooms = messagesByRoomRef.child(searchParams.key);
        const roomRef = roomsRef.child(searchParams.key);

        messagesByRooms
            .on('value', snapshot => {
                const value = snapshot.val();
                const messages = value ? Object.values(value) : [];
                messageList.update({ messages: messages });
            });
            
        roomRef
            .on('value', snapshot => {
                const value = snapshot.val();
                header.update({ title: value.name });
            });
            
        const makeMessage = new MakeMessage({ 
            messagesByRooms,
            key: searchParams.key
        });

        main.appendChild(makeMessage.render());

        const messageList = new MessageList({ messages: [] });
        main.appendChild(messageList.render());

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