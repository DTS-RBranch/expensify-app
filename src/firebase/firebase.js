import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
}; 

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// let createdAt = moment(0).add(4, 'week').valueOf();
// database.ref('expenses').push({
//     description: 'Water Bill',
//     amount: 12345,
//     createdAt,
//     note: ''
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 109500,
//     createdAt,
//     note: ''
// });

// database.ref('expenses').push({
//     description: 'Phone',
//     amount: 6678,
//     createdAt,
//     note: ''
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//     console.log(expenses);
// });

//
// child_remove subscriber
//
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('Removed: ', snapshot.key, snapshot.val());
// });

// //
// // child_changed subscriber
// //
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('Changed ', snapshot.key, snapshot.val());
// });

// //
// //   child_added
// //
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('Added', snapshot.key, snapshot.val());
// });
//
//   Subscription for changing expenses in the database
//
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });



//database.ref('notes/-L8wGZ4DqydT6t1gsPlC').remove();  

// database.ref('notes').push({
//     title: 'Work on basement',
//     body: 'Install baseboard'
// });



// //
// //    Create database
// //
// database.ref().set({
//     name: "Rick Branch",
//     age: 59,
//     stressLevel: 6,
//     job: {
//         title: 'Enginerd',
//         company: 'DTS'
//     },
//     location: {
//         city:  "Mason",
//         country: "United States"
//     }
// }).then(() => {
//     console.log("Data was saved");    
// }).catch((e) => {
//     console.log('error: ', e);
// });

// //
// //   Update/change database
// //
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Google',
//     'location/city': 'Seattle'
// });

//
//   Get data from the database
//
// database.ref('location/city').once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch(() => {
//         console.log('Error fetching data');
//     });

//
//   Get notified of database changes
//
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(62);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(25);
// }, 10500);


// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is an ${data.job.title} at ${data.job.company}.`);
// });

//
//   Remove data from database
//
// database.ref('isSingle').remove().then(()=> {
//     console.log('Remove was successful');
// }).catch((e) => {
//     console.log('Remove failed: ', e);
// });

//
//   This call also removes isSingle
//
//database.ref('isSingle').set( null );

// database.ref('age').set(60);
// database.ref('location/city').set('Cincinnati');

// database.ref('attributes').set({
//     height: 72,
//     weight: 175
// }).then(() => {
//     console.log('Second set call worked');
// }).catch((e) => {
//     console.log('Second Set Error: ', e);
// });