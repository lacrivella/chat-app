import Component from '../Component.js';
import Header from '../shared/Header.js';
import RoomList from '../shared/RoomList.js';
import AddRoom from '../shared/AddRoom.js';
import { roomsRef } from '../services/firebase.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addRoom = new AddRoom();
        main.appendChild(addRoom.render());

        const roomList = new RoomList({ rooms: [] });
        const roomListDOM = roomList.render();
        main.appendChild(roomListDOM);

        roomsRef.on('value', snapshot => {
            const value = snapshot.val();
            const rooms = value ? Object.values(value) : [];
            roomList.update({ rooms });
        });

        return dom;
    }
    
    renderTemplate() {
        return /*html*/ `
            <div id="background">
                <main>
                <main>
            </div>
    `;
    }
}

export default App;