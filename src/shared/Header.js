import Component from '../Component.js';
// import { auth } from '../services/firebase.js';

class Header extends Component {
    renderTemplate() {
        const title = this.props.title || document.title;
        return /*html*/ `
            <header>
                <h1>${title}</h1>
                <div class ="profile">
                    <img src="">
                </div>
            </header>      
    `;
    }
}

export default Header;