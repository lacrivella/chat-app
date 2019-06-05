import Component from '../Component.js';

class AddRoom extends Component {

    renderTemplate() {
        return /*html*/ `
        <form>
            <label><input name="chat-room"></label>
            <button>Add</button>
        </form>       
    `;
    }
}

export default AddRoom;