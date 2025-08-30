import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { IonicStorageModule } from '@ionic/storage-angular'; @NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    AngularFireStorageModule, 
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireAuthModule,
     AppRoutingModule,
     Ng2SearchPipeModule,
    AngularFireModule.initializeApp(environment.firebaseconfig)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
