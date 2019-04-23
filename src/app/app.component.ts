import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth as FirebaseAuth, User } from 'firebase/app';
// Application entry point component.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public angularFireAuth: AngularFireAuth) {}
  title = 'AngularToDo';

  login() {
    this.angularFireAuth.auth
      .signInWithPopup(new FirebaseAuth.GoogleAuthProvider())
      .then(res => console.log(res))
      .catch(err => console.warn(err));
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }
}
