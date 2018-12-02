import { Component } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

@Component({
const settings = {timestampsInSnapshots: true};
const config = {
    apiKey: "AIzaSyD7udd4GextP3AUfVUIi7G3wT5AYqbz8jY",
    authDomain: "se3316-lab5-5ad52.firebaseapp.com",
    databaseURL: "https://se3316-lab5-5ad52.firebaseio.com",
    projectId: "se3316-lab5-5ad52",
    storageBucket: "se3316-lab5-5ad52.appspot.com",
};
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
ngOnInit() {
  firebase.initializeApp(config);
  firebase.firestore().settings(settings);
}
