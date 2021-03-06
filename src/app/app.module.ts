import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CirclesComponent } from './circles/circles.component';
import { LinearComponent } from './linear/linear.component';

@NgModule({
  declarations: [
    AppComponent,
    CirclesComponent,
    LinearComponent
  ],
  imports: [ BrowserModule, FormsModule, AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
