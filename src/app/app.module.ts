import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from "../pages/intro/intro";
import { AmericaPage } from "../pages/america/america";
import { AfricaPage } from "../pages/africa/africa";
import { AsiaPage } from "../pages/asia/asia";
import { EuropaPage } from "../pages/europa/europa"; 
import { OceaniaPage } from "../pages/oceania/oceania";
import { CamaroesPage } from "../pages/camaroes/camaroes";
import { CostaDoMarfimPage } from "../pages/costa-do-marfim/costa-do-marfim";
import { ArgentinaPage } from "../pages/argentina/argentina";
import { BrasilPage } from "../pages/brasil/brasil";
import { CanadaPage } from "../pages/canada/canada";
import { JapaoPage } from "../pages/japao/japao";
import { CoreiaDoSulPage } from "../pages/coreia-do-sul/coreia-do-sul";
import { AlemanhaPage } from "../pages/alemanha/alemanha";
import { ItaliaPage } from "../pages/italia/italia";
import { AustraliaPage } from "../pages/australia/australia";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    AmericaPage,
    AfricaPage,
    AsiaPage,
    EuropaPage,
    OceaniaPage,
    CamaroesPage,
    CostaDoMarfimPage,
    ArgentinaPage,
    BrasilPage,
    CanadaPage,
    CoreiaDoSulPage,
    JapaoPage,
    AlemanhaPage,
    ItaliaPage,
    AustraliaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    AmericaPage,
    AfricaPage,
    AsiaPage,
    EuropaPage,
    OceaniaPage,
    CamaroesPage,
    CostaDoMarfimPage,
    ArgentinaPage,
    BrasilPage,
    CanadaPage,
    CoreiaDoSulPage,
    JapaoPage,
    AlemanhaPage,
    ItaliaPage,
    AustraliaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
