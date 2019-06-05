import Component from '../Component.js';
import Header from '../shared/Header.js';
import RoomList from '../shared/RoomList.js';
import AddRoom from '../shared/AddRoom.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addRoom = new AddRoom();
        main.appendChild(addRoom.render());

        const roomList = new RoomList;
        const roomListDOM = roomList.render();
        main.appendChild(roomListDOM);

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