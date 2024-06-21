import { Component } from '@angular/core';
import { cilShieldAlt, cilDelete, cilPencil, cilArrowThickRight } from '@coreui/icons';
import { BehaviorSubject, Observable } from 'rxjs';
import foodCourtData from './../../../../assets/data/food-court.json';

@Component({
  selector: 'app-food-counter-view',
  templateUrl: './food-counter-view.component.html',
  styleUrl: './food-counter-view.component.scss'
})
export class FoodCounterViewComponent {
  private foodCourtBehaviourSubject: BehaviorSubject<Array<any>>;
  public saveEnable: boolean = false;
  public editFoodCourt: any = {};
  private foodCourtDataList: Array<any> = JSON.parse(JSON.stringify(foodCourtData));
  icons = { cilDelete, cilPencil, cilShieldAlt, cilArrowThickRight };

  constructor() {
    this.foodCourtBehaviourSubject = new BehaviorSubject<Array<any>>([]);
  }

  get foodCourt$(): Observable<Array<any>> {
    return this.foodCourtBehaviourSubject.asObservable();
  }

  isEmptyRecord(): boolean {
    return this.foodCourtDataList.length > 0;
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
