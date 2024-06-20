import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
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
import { WidgetsDropdownComponent } from '../widgets/widgets-dropdown/widgets-dropdown.component';
import { IconDirective, IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { CommonModule, NgStyle } from '@angular/common';
import { WidgetsBrandComponent } from '../widgets/widgets-brand/widgets-brand.component';
import foodCourtData from './../../../assets/data/food-court.json';
import { BehaviorSubject, Observable } from 'rxjs';
import { FoodCourtModule } from './food-court.module'
import { FoodCourtFormComponent } from './food-court-form/food-court-form.component';
@Component({
  selector: 'app-food-court',
  standalone: true,
  imports: [WidgetsDropdownComponent, FoodCourtModule, CommonModule, ModalModule, IconModule, IconDirective, TextColorDirective, CardComponent, GridModule, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, ChartjsComponent, NgStyle, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, WidgetsBrandComponent, CardHeaderComponent, TableDirective, AvatarComponent],
  templateUrl: './food-court.component.html',
  styleUrl: './food-court.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FoodCourtComponent implements OnInit {
  private foodCourtBehaviourSubject: BehaviorSubject<any[]>;
  public saveEnable: boolean = false;
  constructor() {
    this.foodCourtBehaviourSubject = new BehaviorSubject<any[]>([]);
  }

  get foodCournt$(): Observable<any> {
    return this.foodCourtBehaviourSubject.asObservable();
  }
  ngOnInit(): void {
    this.foodCourtBehaviourSubject.next(foodCourtData);
  }

}