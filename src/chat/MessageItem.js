import Component from '../Component.js';

class MessageItem extends Component {
    renderTemplate() {
        const  message = this.props.message;
        return /*html*/ `
            <li class="message-item">
            <span>${message.displayName}</span>
            <span>${message.message}</span>
            <img src="${message.photoURL}">
            </li>
    `;
    }
}

export default MessageItem;