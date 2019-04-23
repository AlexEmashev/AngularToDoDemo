import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { ArchiveComponent } from './views/archive/archive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { MatButtonModule } from '@angular/material/button';
import { ToDoInputModule } from './components/todo-input/todo-input.module';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'archive', component: ArchiveComponent }
];
@NgModule({
  declarations: [
    // Used to allow other modules to import components defined in this module
    AppComponent, // Main app component
    TaskComponent, // Describes single task
    MainComponent,
    ArchiveComponent
  ],
  imports: [
    ToDoInputModule,
    BrowserModule,
    FormsModule, // Import module to enable ngModule for input
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HeaderModule,
    MatButtonModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule {}
