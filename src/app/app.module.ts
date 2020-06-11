import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {NgxPaginationModule} from 'ngx-pagination';
import {NativeAudio} from '@ionic-native/native-audio/ngx';

import { FilterPipe } from './pipes/filter/filter.pipe';
//import { DatefileterPipe } from './pipes/filter/datefileter.pipe';
import { DatefilterPipe } from './pipes/datefilter/datefilter.pipe';
import { PipesModule } from './pipes/pipes.module';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    PipesModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    Camera,
    SMS,
    CallNumber,
    NativeAudio,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
