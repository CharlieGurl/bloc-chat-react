import React, { Component } from 'react';
//import { Route, Link } from 'react-router-dom'; 
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


//src="https://www.gstatic.com/firebasejs/5.5.0/firebase.js"
  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyBX--IglJtOo2zVSquRglIDaAF0NtL2cII",
      authDomain: "bloc-chat-react-7f103.firebaseapp.com",
      databaseURL: "https://bloc-chat-react-7f103.firebaseio.com",
      projectId: "bloc-chat-react-7f103",
      storageBucket: "bloc-chat-react-7f103.appspot.com",
      messagingSenderId: "348351002063"
  };
  firebase.initializeApp(config);



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Chat</h1>
        </header>
        <h2 className="RoomList">
          Chat Rooms:
        </h2>

        <RoomList 
          firebase = {firebase}
          /> 
    
      </div>
    );
  }
}

export default App;
