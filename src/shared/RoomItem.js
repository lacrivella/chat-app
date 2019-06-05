import Component from '../Component.js';

class RoomItem extends Component {
    renderTemplate() {
        return /*html*/ `
        <ul>
            <li>
                <input type="checkbox" name"checkbox">
                <label>STATIC CHATROOM I</label>
                <button id="remove">remove</button>
            </li>
            <li>
                <input type="checkbox" name"checkbox">
                <label>STATIC CHATROOM II</label>
                <button id="remove">remove</button>
            </li>
            <li>
                <input type="checkbox" name"checkbox">
                <label>STATIC CHATROOM III</label>
                <button id="remove">remove</button>
            </li>
        </ul>
    `;
    }
}

export default RoomItem;