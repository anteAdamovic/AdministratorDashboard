import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

// Login
import { LoginModule } from '../modules/login/login.module';
import { LoginComponent } from '../modules/login/login.component';

// Dashboard
import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { LogViewerComponent } from '../modules/dashboard/components/log-viewer/log-viewer.component';

// User-context
import { UserContextService } from './services/user-context.service';

// routes
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'log-viewer' },
    { path: 'log-viewer', component: LogViewerComponent }
  ]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    LoginModule,
    DashboardModule
  ],
  providers: [
    UserContextService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
