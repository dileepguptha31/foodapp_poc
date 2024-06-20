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
import { BehaviorSubject, Observable } from 'rxjs';
import { FoodCourtModule } from './food-court.module';
import foodCourtData from './../../../assets/data/food-court.json';
import { cilShieldAlt, cilDelete, cilPencil } from '@coreui/icons';

@Component({
  selector: 'app-food-court',
  standalone: true,
  imports: [WidgetsDropdownComponent, FoodCourtModule, CommonModule, IconModule, IconDirective, TextColorDirective, CardComponent, GridModule, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, ChartjsComponent, NgStyle, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, WidgetsBrandComponent, CardHeaderComponent, TableDirective, AvatarComponent],
  templateUrl: './food-court.component.html',
  styleUrl: './food-court.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FoodCourtComponent implements OnInit {
  private foodCourtBehaviourSubject: BehaviorSubject<Array<any>>;
  public saveEnable: boolean = false;
  public editFoodCourt: any = {};
  private foodCourtDataList: Array<any> = JSON.parse(JSON.stringify(foodCourtData));
  icons = { cilDelete, cilPencil, cilShieldAlt };

  constructor() {
    this.foodCourtBehaviourSubject = new BehaviorSubject<Array<any>>([]);
  }

  get foodCournt$(): Observable<Array<any>> {
    return this.foodCourtBehaviourSubject.asObservable();
  }
  ngOnInit(): void {
    this.foodCourtBehaviourSubject.next(this.foodCourtDataList);
  }
  onAddNewFoodCourt(newFoodCourt: any) {
    if (newFoodCourt.id == -1) {
      newFoodCourt.id = this.foodCourtDataList.length + 1;
    }

    let changed = false;
    for (let index = 0; index < this.foodCourtDataList.length; index++) {
      const element = this.foodCourtDataList[index];
      if (element.id == newFoodCourt.id) {
        this.foodCourtDataList[index] = newFoodCourt;
        changed = true;
      }
    }

    if (!changed) {
      this.foodCourtDataList.push(newFoodCourt);
    }

    this.foodCourtBehaviourSubject.next(this.foodCourtDataList);
  }

  onEdit(data: any) {
    this.editFoodCourt = data;
  }

  onDelete(id: number) {
    const foodCourtList: Array<any> = [];
    for (let index = 0; index < this.foodCourtDataList.length; index++) {
      const element = this.foodCourtDataList[index];
      if (element.id !== id) {
        foodCourtList.push(element);
      }
    }
    this.foodCourtDataList = foodCourtList;
    this.foodCourtBehaviourSubject.next(this.foodCourtDataList);
  }
}
