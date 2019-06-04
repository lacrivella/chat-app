import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('Profile Component');

test('renders with full user props', assert => {
    //arrange
    const user = {
        displayName: 'David Bowie',
        photoURL: 'https://www.darkcarnival.co.za/wp-content/uploads/2017/08/david-bowie-guardians-of-the-galaxy-vol-2.jpg'
    };

    const profile = new Profile({ user });
    const expected = /*html*/ `
        <div class="profile">
            <img src="https://www.darkcarnival.co.za/wp-content/uploads/2017/08/david-bowie-guardians-of-the-galaxy-vol-2.jpg">
            <span>David Bowie</span>
            <button>Sign Out</button>
        </div>
    `;
    //act
    const rendered = profile.renderTemplate();
    //assert
    assert.htmlEqual(rendered, expected);
});

