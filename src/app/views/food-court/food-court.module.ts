import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodCourtFormComponent } from './food-court-form/food-court-form.component';
import { IconModule } from '@coreui/icons-angular';
import {
  ButtonDirective, CardBodyComponent,
  CardComponent, CardHeaderComponent, CardModule, ColComponent, FormControlDirective,
  FormDirective,
  FormLabelDirective,
  GridModule, ModalModule, RowComponent
} from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FoodCourtComponent } from './food-court.component';
import { FoodCourtViewComponent } from './food-court-view/food-court-view.component';
import { FoodCounterViewComponent } from './food-counter-view/food-counter-view.component';
import { FoodCounterFormComponent } from './food-counter-form/food-counter-form.component';
import { CellIconRendererComponent } from '../common/cell-icon-renderer/cell-icon-renderer.component';

import { HttpService } from '../../services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: '', component: FoodCourtComponent,
    children: [
      {
        path: 'food-court-view', component: FoodCourtViewComponent,
        data: { title: $localize`Food Court` }
      },
      {
        path: 'counter/:id', component: FoodCounterViewComponent,
        data: { title: $localize`Food Counter` }
      },
      { path: '', redirectTo: 'food-court-view', pathMatch: 'full' }
    ]
  },
];


@NgModule({
  declarations: [FoodCourtComponent, FoodCourtFormComponent, FoodCourtViewComponent, FoodCounterViewComponent, FoodCounterFormComponent, CellIconRendererComponent],
  exports: [],
  providers: [HttpService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), HttpClientModule,
    IconModule, ReactiveFormsModule, FormsModule, CardModule, FormDirective,
    ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent,
    ModalModule, GridModule, RowComponent, ColComponent, FormLabelDirective, FormControlDirective,
    MatTableModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FoodCourtModule { }
