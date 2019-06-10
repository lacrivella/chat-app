import Component from '../Component.js';
import RoomItem from '../shared/RoomItem.js';

class RoomList extends Component {

    render() {
        const list = this.renderDOM();
        const rooms = this.props.rooms;

        rooms.forEach(room => {
            const roomItem = new RoomItem({ room });
            list.appendChild(roomItem.render());
        });

        return list;
    }
    renderTemplate() {
        return /*html*/ `
        <ul id="lists">
        </ul>      
    `;
    }
}

export default RoomList;