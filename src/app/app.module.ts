import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideFirestore, getFirestore } from '@angular/fire/firestore'
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    ZXingScannerModule
  ],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }, 
    provideFirebaseApp(() => 
      initializeApp({ 
        projectId: "kale-7cbde",
        appId: "1:38125179470:web:1f81b657d27e41b76e291f", 
        storageBucket: "kale-7cbde.firebasestorage.app", 
        apiKey: "AIzaSyATITapdSxosC7zT3QOTGLjhIufEurAdG0",
         authDomain: "kale-7cbde.firebaseapp.com", 
         messagingSenderId: "38125179470", 
         measurementId: "G-7MXF9TN2HZ" })), 
         provideAuth(() => getAuth()), 
         provideDatabase(() => getDatabase()), 
         provideStorage(() => getStorage())],
  bootstrap: [AppComponent],
})
export class AppModule {}
