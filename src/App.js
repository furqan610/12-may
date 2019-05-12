import React, {Component} from "react";
import {View, Text} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import Reducers from "./Reducers";
import LoginForm from "./Components/LoginForm"
import firebase from "firebase"

class App extends Component {

    componentWillMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyBXUmj8BeR9_0SWtn7A3dsLlW3Alqrdwi0",
            authDomain: "furqan-1ad72.firebaseapp.com",
            databaseURL: "https://furqan-1ad72.firebaseio.com",
            projectId: "furqan-1ad72",
            storageBucket: "furqan-1ad72.appspot.com",
            messagingSenderId: "165713305243",
            appId: "1:165713305243:web:f576f38e7834b450"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }
    render() {
        return(
            <Provider store={createStore(Reducers)}>
            <View>
                <Text>Redux Manager</Text>
                <LoginForm />
            </View>
            </Provider>
        );
    }
}
export default App;