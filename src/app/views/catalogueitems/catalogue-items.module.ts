import { NgModule } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';

import {  CatalogueitemsComponent} from './catalogueitems.component';
import { IconModule } from '@coreui/icons-angular';
import {
  AvatarComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  GridModule,
  GutterDirective,
  ModalModule,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TableDirective,
  TextColorDirective
} from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    // AvatarComponent,
    ButtonDirective,
    // ButtonGroupComponent,
    CardBodyComponent,
    CardComponent,
    // CardFooterComponent,
    // CardHeaderComponent,
    // ColComponent,
    // FormCheckLabelDirective,
    // GridModule,
    // GutterDirective,
    ModalModule,
    // ProgressBarDirective,
    // ProgressComponent,
    // RowComponent,
    // TableDirective,
    // TextColorDirective
    RowComponent, ColComponent,
    ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormControlDirective, NgStyle
  ]
})
export class CatalogueItemsModule { }
