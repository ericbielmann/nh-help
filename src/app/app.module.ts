import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

/* Feature Modules */
// import { ArtistModule } from "./artist/artist.module";
import { CoreModule } from './core/core.module';
// import { DashboardModule } from "./dashboard/dashboard.module";
import { PatientsModule } from "./patients/patients.module";
import { CallbackModule } from "./callback/callback.module";

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    // ArtistModule,
    CoreModule,
    CallbackModule,
    // DashboardModule,
    PatientsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
