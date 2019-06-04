import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class Profile extends Component {
    renderTemplate() {
        return /*html*/ `
            <div class="profile">
            <img src="https://www.darkcarnival.co.za/wp-content/uploads/2017/08/david-bowie-guardians-of-the-galaxy-vol-2.jpg">
            <span>David Bowie</span>
            <button>Sign Out</button>
            </div>
    `;
    }
}

export default Profile;