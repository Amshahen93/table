import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResizableModule } from 'angular-resizable-element';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ResizeTableDirective } from './table/resize-table.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ResizeTableDirective
  ],
  imports: [
    BrowserModule,
    ResizableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
