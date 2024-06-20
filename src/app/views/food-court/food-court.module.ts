import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  GridModule,
  GutterDirective,
  ModalModule,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TableDirective,
  TextColorDirective
} from '@coreui/angular';
@NgModule({
  declarations: [FoodCourtFormComponent],
  exports: [FoodCourtFormComponent],
  imports: [
    CommonModule,
    AvatarComponent,
    ButtonDirective,
    ButtonGroupComponent,
    CardBodyComponent,
    CardComponent,
    CardFooterComponent,
    CardHeaderComponent,
    ColComponent,
    FormCheckLabelDirective,
    GridModule,
    GutterDirective,
    ModalModule,
    ProgressBarDirective,
    ProgressComponent,
    RowComponent,
    TableDirective,
    TextColorDirective
  ]
})
export class FoodCourtModule { }
