import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ReferencesModule } from './references/references.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VersionComponent } from './version/version.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionComponent,
    HeaderComponent
  ],
    imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReferencesModule,
        MatToolbarModule,
        MatButtonModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
