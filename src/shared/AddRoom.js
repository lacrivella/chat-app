import Component from '../Component.js';
import { auth, roomsRef } from '../services/firebase.js';

class AddRoom extends Component {
    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const roomRef = roomsRef.push();
            roomRef.set({
                key: roomRef.key,
                title: input.value,
                owner: auth.currentUser.uid
            })
                .then(() => {
                    form.reset();
                });
        });
        return form;
    }

    renderTemplate() {
        return /*html*/ `
        <form>
            <label><input name="chat-room" placeholder="add a chat room"></label>
            <button>&#9875;</button>
        </form>       
    `;
    }
}

export default AddRoom;