import Component from '../Component.js';

class MessageItem extends Component {
    renderTemplate() {
        const message = this.props.message;
        return /*html*/ `
            <li>
                <div class="message-item">
                    <span id="displayname">${message.displayName}</span>
                    <span id="displaymessage">${message.message}</span>
                </div>
            </li>
    `;
    }
}

export default MessageItem;