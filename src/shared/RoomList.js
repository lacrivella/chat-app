import Component from '../Component.js';
import RoomItem from '../shared/RoomItem.js';

class RoomList extends Component {
    render() {
        const list = this.renderDOM();

        const roomItem = new RoomItem();
        list.appendChild(roomItem.render());
        return list;
    }
    renderTemplate() {
        return /*html*/ `
        <div id="lists"></div>      
    `;
    }
}

export default RoomList;