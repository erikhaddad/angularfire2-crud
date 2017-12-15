import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {FlightModule} from './flight/flight.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {HotelModule} from './hotel/hotel.module';

import {environment} from '../environments/environment';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';

import {MaterialModule} from './core/material.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    }]),

    MaterialModule,
    FlexLayoutModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireStorageModule,

    FlightModule,
    HotelModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
