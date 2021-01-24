import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/performance'

const config = {
    apiKey: 'AIzaSyC-A-1cl_xutWz1fVy7Q49jgBrdnBHPERQ',
    authDomain: 'r6s-sens.firebaseapp.com',
    projectId: 'r6s-sens',
    storageBucket: 'r6s-sens.appspot.com',
    messagingSenderId: '1037658157741',
    appId: '1:1037658157741:web:6b9384a0a7e79135c1cc24',
    measurementId: 'G-JCCG58SF6N'
}

const initFirebase = async () => {
    await firebase.initializeApp(config)
    await firebase.performance()
    if (await firebase.analytics.isSupported()) await firebase.analytics()
}

export { initFirebase }
