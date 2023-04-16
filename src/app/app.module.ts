import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { HelpMeComponent } from './help-me/help-me.component';
import { AudioComponent } from './audio/audio.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalanderComponent } from './calander/calander.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import {HttpClientModule} from '@angular/common/http'
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { HolyQuranComponent } from './holy-quran/holy-quran.component';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ChatComponent,
    HelpMeComponent,
    AudioComponent,
    PageNoFoundComponent,
    SidebarComponent,
    CalanderComponent,
    HolyQuranComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FullCalendarModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
