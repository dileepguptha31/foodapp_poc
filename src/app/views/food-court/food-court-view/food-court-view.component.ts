import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import foodCourtData from './../../../../assets/data/food-court.json';
import { cilShieldAlt, cilDelete, cilPencil, cilArrowThickRight } from '@coreui/icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food-court-view',
  templateUrl: './food-court-view.component.html',
  styleUrl: './food-court-view.component.scss'
})
export class FoodCourtViewComponent {
  private foodCourtBehaviourSubject: BehaviorSubject<Array<any>>;
  public saveEnable: boolean = false;
  public editFoodCourt: any = {};
  private foodCourtDataList: Array<any> = JSON.parse(JSON.stringify(foodCourtData));
  icons = { cilDelete, cilPencil, cilShieldAlt, cilArrowThickRight };
  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.foodCourtBehaviourSubject = new BehaviorSubject<Array<any>>([]);
  }

  get foodCourt$(): Observable<Array<any>> {
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

  onView(id: number) {
    this.router.navigate(['counter/1'], { relativeTo: this.activeRoute.parent });
  }
}
