import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '@environment';
import { AppComponent } from './app.component';
import { CheckboxComponent } from '@components/checkbox';
import { DeleteConfirmComponent } from '@components/delete-confirm';
import { HeaderComponent } from '@components/header';
import { InfoComponent } from '@components/info';
import { ListComponent } from '@components/list';
import { ModalComponent } from '@components/modal';
import { MainEntryComponent } from '@components/main-entry';
import { PreviewComponent } from '@components/preview';
import { VersionComponent } from '@components/version';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    DeleteConfirmComponent,
    HeaderComponent,
    InfoComponent,
    ListComponent,
    MainEntryComponent,
    ModalComponent,
    PreviewComponent,
    VersionComponent
  ],
  imports: [
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      AngularFireAuthModule,
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatMenuModule,
      MatSnackBarModule,
      MatTableModule,
      MatDialogModule,
      MatToolbarModule
  ],
  entryComponents: [
    ModalComponent,
    PreviewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
