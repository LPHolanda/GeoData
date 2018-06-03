import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from "../pages/intro/intro";
import { TabsPage } from "../pages/tabs/tabs";
import { HomePage } from "../pages/home/home";
import { DatabaseProvider } from "../providers/database/database";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, databaseProvider: DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      databaseProvider.createDatabase().then(() => {
        this.abrirHomePage(splashScreen);
      }).catch((e) => {
        console.log(e);
        this.abrirHomePage(splashScreen);
      })
    });
  }

  private abrirHomePage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = HomePage;
  }
}
