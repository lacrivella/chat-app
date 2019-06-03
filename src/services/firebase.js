const config = {
    apiKey: 'AIzaSyASmZ9JALM1RkfbF91dAyU-AEKDlCL2ztA',
    authDomain: 'chat-app-9810d.firebaseapp.com',
    databaseURL: 'https://chat-app-9810d.firebaseio.com',
    projectId: 'chat-app-9810d',
    storageBucket: 'chat-app-9810d.appspot.com',
    messagingSenderId: '1056196937702',
    appId: '1:1056196937702:web:ee46a483a7e62a7f'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
