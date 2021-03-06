import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { CodelabComponent, ResumeDialog } from './codelab/codelab.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { MarkdownParserService } from './markdown-parser.service';
import { CodelabsComponent } from './codelabs/codelabs.component';
import { FilterPipe } from './filter.pipe';

const routes: Routes = [
  {
    path: "",
    component: CodelabsComponent
  },
  {
    path: "codelabs",
    component: CodelabsComponent
  },
  {
    path: "codelab/:id",
    component: CodelabComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CodelabComponent,
    CodelabsComponent,
    ResumeDialog,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [MarkdownParserService],
  entryComponents: [ResumeDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
