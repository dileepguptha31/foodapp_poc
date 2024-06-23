import { Component } from '@angular/core';
import { cilShieldAlt, cilDelete, cilPencil, cilArrowThickRight } from '@coreui/icons';
import { BehaviorSubject, Observable } from 'rxjs';
import counderData from './../../../../assets/data/counter.json';

@Component({
  selector: 'app-food-counter-view',
  templateUrl: './food-counter-view.component.html',
  styleUrl: './food-counter-view.component.scss'
})
export class FoodCounterViewComponent {
  private counterBehaviourSubject: BehaviorSubject<Array<any>>;
  public editedCounter: any = {};
  private counterDataList: Array<any> = JSON.parse(JSON.stringify(counderData));
  icons = { cilDelete, cilPencil, cilShieldAlt, cilArrowThickRight };

  constructor() {
    this.counterBehaviourSubject = new BehaviorSubject<Array<any>>([]);
  }

  get foodCourt$(): Observable<Array<any>> {
    return this.counterBehaviourSubject.asObservable();
  }
  ngOnInit(): void {
    this.counterBehaviourSubject.next(this.counterDataList);
  }
  onAddCounter(newCounter: any) {
    if (newCounter.id == -1) {
      newCounter.id = this.counterDataList.length + 1;
    }

    let changed = false;
    for (let index = 0; index < this.counterDataList.length; index++) {
      const element = this.counterDataList[index];
      if (element.id == newCounter.id) {
        this.counterDataList[index] = newCounter;
        changed = true;
      }
    }

    if (!changed) {
      this.counterDataList.push(newCounter);
    }

    this.counterBehaviourSubject.next(this.counterDataList);
  }

  onEdit(data: any) {
    this.editedCounter = data;
  }

  onDelete(id: number) {
    const counterList: Array<any> = [];
    for (let index = 0; index < this.counterDataList.length; index++) {
      const element = this.counterDataList[index];
      if (element.id !== id) {
        counterList.push(element);
      }
    }
    this.counterDataList = counterList;
    this.counterBehaviourSubject.next(this.counterDataList);
  }
}
