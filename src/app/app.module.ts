import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [ // Used to allow other modules to import components defined in this module
    AppComponent,  // Main app component
    TaskComponent // Describes single task
  ],
  imports: [
    BrowserModule,
    FormsModule // Import module to enable ngModule for input
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
