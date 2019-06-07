import Component from '../Component.js';
import { auth, messagesByRoomRef } from '../services/firebase.js';

class MakeMessage extends Component {
    render() {
        const form = this.renderDOM();

        const key = this.props.key;
        const messagesRef = messagesByRoomRef.child(key);

        const input = form.querySelector('input');
        
        form.addEventListener('submit', event => {
            event.preventDefault();
            
            
            const avatar = auth.currentUser.photoURL || './assets/default-avatar.png';
            const messages = messagesRef.push();

            messages.set({
                uid: auth.currentUser.uid,
                message: input.value,
                displayName: auth.currentUser.displayName,
                photoURL: avatar,
                date: Date()
            });

            form.reset();
            input.focus();
            document.activeElement.blur(); 
        });
        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <form id="make-message">
                <label><input name="chat" placeholder="send a message"></label>
                <button>X</button>
            </form>
    `;
    }
}

export default MakeMessage;