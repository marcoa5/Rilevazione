import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './comp/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButComponent } from './comp/but/but.component';
import { ResComponent } from './comp/res/res.component';
import { ExistComponent } from './comp/exist/exist.component';
import { RilevazioniComponent } from './comp/rilevazioni/rilevazioni.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import { GuestComponent } from './comp/guest/guest.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ButComponent,
    ResComponent,
    ExistComponent,
    RilevazioniComponent,
    GuestComponent
  ],
  imports: [
    BrowserModule, MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, MatNativeDateModule,
    AppRoutingModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatDatepickerModule,
    BrowserAnimationsModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule, MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'it-IT'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
