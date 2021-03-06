
  

// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        window.location.replace("historial.html");
        db.collection('viajes').get().then(snapshot => {
            setupGuides(snapshot.docs);
          });
    } else {
        console.log('user logged out');
    }
}) // logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
e.preventDefault();
auth.signOut().then(() => {
    console.log('user signed out');
})
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
e.preventDefault();

// get user info
const email = loginForm['login-email'].value;
const password = loginForm['login-password'].value;

// log the user in
auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
});

});