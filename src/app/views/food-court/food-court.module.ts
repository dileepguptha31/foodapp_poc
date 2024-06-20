import { NgModule } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';

import { FoodCourtFormComponent } from './food-court-form/food-court-form.component';
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
  declarations: [FoodCourtFormComponent],
  exports: [FoodCourtFormComponent],
  imports: [
    CommonModule,
    // AvatarComponent,
    ButtonDirective,
    // ButtonGroupComponent,
    // CardBodyComponent,
    // CardComponent,
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
export class FoodCourtModule { }
