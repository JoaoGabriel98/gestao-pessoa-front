import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListpeopleComponent } from './listpeople/listpeople.component';
import { CreatepeopleComponent } from './createpeople/createpeople.component';
import { EditpeopleComponent } from './editpeople/editpeople.component';

@NgModule({
  declarations: [
    AppComponent,
    ListpeopleComponent,
    CreatepeopleComponent,
    EditpeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
