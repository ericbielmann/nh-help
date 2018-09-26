import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AuthGuard } from './core/auth.guard';

import { AppComponent } from './app.component';

/* Feature Modules */
// import { ArtistModule } from "./artist/artist.module";
import { CoreModule } from './core/core.module';
// import { DashboardModule } from "./dashboard/dashboard.module";
import { PatientsModule } from "./patients/patients.module";
import { LoginModule } from "./login/login.module";
import { CallbackModule } from "./callback/callback.module";

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    // ArtistModule,
    CoreModule,
    CallbackModule,
    // DashboardModule,
    PatientsModule,
    // LoginModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, // for database
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
