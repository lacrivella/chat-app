import Component from '../Component.js';
import { auth, roomsRef } from '../services/firebase.js';

class AddRoom extends Component {
    render() {
        const form = this.renderDOM();
    
        form.addEventListener('submit', event => {
            const roomRef = roomsRef.push();
            event.preventDefault();
            const formData = new FormData(form);

            const room = {
                id: roomRef.key,
                owner: auth.currentUser.uid,
                title: formData.get('chat-room')
            };

            roomRef.set(room).then(() => {
                form.reset(); 
            });

        });
    
        return form;
    }

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