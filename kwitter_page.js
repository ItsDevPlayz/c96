const firebaseConfig = {
    apiKey: "AIzaSyBN-4Uj40jnKXfwJ2jkTBFEt181pqa8gCE",
    authDomain: "dwitter-11fc0.firebaseapp.com",
    databaseURL: "https://dwitter-11fc0-default-rtdb.firebaseio.com",
    projectId: "dwitter-11fc0",
    storageBucket: "dwitter-11fc0.appspot.com",
    messagingSenderId: "993057316165",
    appId: "1:993057316165:web:dff28028f924350366722c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
    }
    
    function logout(){
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
          window.location="index.html";
      }