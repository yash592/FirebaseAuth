import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {

	componentWillMount () {
		firebase.initializeApp({
		   apiKey: "AIzaSyBR-JMERhQwQh3qFCWmjJ3FHDfqdboEQ40",
		   authDomain: "authentication-2f975.firebaseapp.com",
		   databaseURL: "https://authentication-2f975.firebaseio.com",
		   projectId: "authentication-2f975",
		   storageBucket: "authentication-2f975.appspot.com",
		   messagingSenderId: "526366714959"
		 })
	}


	render() {
		return (
			<View>
			<Header headerText='Login' />
				<LoginForm />
			</View>
		);
		
	}
}

export default App;