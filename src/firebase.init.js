// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDXaFrOo6zdMLXv65qQsC9iML9pQ_SYjFI',
	authDomain: 'dream-event-photography.firebaseapp.com',
	projectId: 'dream-event-photography',
	storageBucket: 'dream-event-photography.appspot.com',
	messagingSenderId: '1078001425073',
	appId: '1:1078001425073:web:d0bfe2f6c173d3e0fe6090',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
