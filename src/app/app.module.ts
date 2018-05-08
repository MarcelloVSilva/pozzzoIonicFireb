import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, DeepLinkConfig } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { RoomProvider } from '../providers/room/room';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const deepLinkConfig: DeepLinkConfig = {
  links: [
    { component: HomePage, name: 'Home', segment: 'home' },
    { component: AboutPage, name: 'About', segment: 'about'},
    { component: ContactPage, name: 'Contact', segment: 'contact' },
    { component: TabsPage, name: '', segment: ''},
  ]
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RoomProvider
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, deepLinkConfig),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCE4E6UCBGFE_tXxxJDYc0ERDUBjewQhWc",
      authDomain: "pozzzo-teste.firebaseapp.com",
      databaseURL: "https://pozzzo-teste.firebaseio.com",
      projectId: "pozzzo-teste",
      storageBucket: "pozzzo-teste.appspot.com",
      messagingSenderId: "462740944460"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RoomProvider
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
