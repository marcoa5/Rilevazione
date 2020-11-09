import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ButComponent,
    ResComponent,
    ExistComponent,
    RilevazioniComponent
  ],
  imports: [
    BrowserModule, MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule,
    AppRoutingModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
