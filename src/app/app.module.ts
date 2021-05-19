import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from'@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ChangeStatusDialogComponent } from './components/order-details/change-status-dialog/change-status-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { DetailsPageComponent } from './components/order-details/details-page/details-page.component';
import {MatCardModule} from '@angular/material/card';
import { BreakPointRegistry, FlexLayoutModule, FlexStyleBuilder, LayoutAlignStyleBuilder, LayoutStyleBuilder, MediaMarshaller, PrintHook, StylesheetMap, StyleUtils, ɵMatchMedia } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderDetailsComponent,
    ChangeStatusDialogComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [PrintHook,
    StyleUtils, 
    StyleSheet,
    StylesheetMap, 
    LayoutAlignStyleBuilder,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry,],
  bootstrap: [AppComponent]
})
export class AppModule { }
