// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyDdAN-JnK6kGIHn4BoMiF2R7UEEridK6Fw",
    authDomain: "loged-83f5a.firebaseapp.com",
    databaseURL: "https://loged-83f5a.firebaseio.com",
    projectId: "loged-83f5a",
    storageBucket: "loged-83f5a.appspot.com",
    messagingSenderId: "630339826811",
    appId: "1:630339826811:web:e40c9aa3a85c9547b9dede"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var messageRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e)
{
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var concern = getInputVal('concern');

    saveMessage(name, email, concern);

    document.querySelector('.alert').style.display = 'block';


    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    
    document.getElementById('contactForm').reset();
} 


function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, concern) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        concern: concern
    });
}