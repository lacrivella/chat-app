import Component from '../Component.js';

class MakeMessage extends Component {
    render() {
        const form = this.renderDOM();

        form.addEventListener('submit', event => {
            event.preventDefault();
            console.log('test');
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