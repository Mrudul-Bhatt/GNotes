import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DrawerComponent } from './home/drawer/drawer.component';
import { MatRippleModule } from '@angular/material/core';
import { NoteInputComponent } from './home/note-input/note-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { TextareaAutoresizeDirective } from './directives/textarea-autoresize.directive';
import { NotesComponent } from './home/notes/notes.component';
import { NoteCloseDirective } from './directives/note-close.directive';
import { MatGridListModule } from '@angular/material/grid-list';
import { NoteComponent } from './UI/note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    NoteInputComponent,
    TextareaAutoresizeDirective,
    NoteCloseDirective,
    NotesComponent,
    NoteComponent,
  ],
  imports: [
    MatCardModule,
    MatInputModule,
    MatRippleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
