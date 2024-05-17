// firebase.js

var firebaseConfig = {
    apiKey: "AIzaSyCqtguojXqd83xxLnEASre_0z4I9mxj_l4",
    authDomain: "muscleuplogin.firebaseapp.com",
    projectId: "muscleuplogin",
    storageBucket: "muscleuplogin.appspot.com",
    messagingSenderId: "55235492919",
    appId: "1:55235492919:web:c332b2d4c20c308e1113b2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var auth = null; // Define a variável auth globalmente

function cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
        .then(function(user) {
            alert("Cadastrado com sucesso");
            auth = user;
        }).catch(function(error) {
            alert("Falha ao cadastrar");
        });
}

function entrar() {

    firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('senha').value)
        .then(function(user) {
                alert("Logado com sucesso");
                auth = user;
                window.location.href = "RUPERPROJECT/index.html"; // Redireciona para a página home.html
        }).catch(function(error) {
            alert("Falha ao logar: " + error.message);
        });
}
