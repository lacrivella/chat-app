import RoomItem from '../src/shared/RoomItem.js';
const test = QUnit.test;

QUnit.module('Room list');

test('renders template from room object', assert => {
    // arrange
    const room = {
        key: 'LgdKlsNYZD8jA-h00Ps',
        owner: 'KwEUd0QTjnUzcnmrtUcFef8kHp03',
        title: 'chatroom 2'

    };
    const expected = /*html*/`
        <li>
            <a href="./chat.html?key=LgdKlsNYZD8jA-h00Ps">chatroom 2</a>
        </li>
    
    `;
    // act
    const roomItem = new RoomItem({ room });
    const html = roomItem.renderTemplate();
    // assert
    assert.htmlEqual(html, expected);
});