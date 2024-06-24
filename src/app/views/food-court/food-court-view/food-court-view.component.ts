import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cilShieldAlt, cilDelete, cilPencil, cilArrowThickRight, cilArrowThickBottom, cilArrowThickTop } from '@coreui/icons';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { FoodCourt } from 'src/app/models/food-court.model'
import { foodCourtDisplayColumn } from 'src/app/models/table-column-def';

@Component({
  selector: 'app-food-court-view',
  templateUrl: './food-court-view.component.html',
  styleUrl: './food-court-view.component.scss'
})
export class FoodCourtViewComponent {
  private foodCourtBehaviourSubject: BehaviorSubject<Array<FoodCourt>>;
  public editFoodCourt: any = {};
  private foodCourtDataList: Array<FoodCourt> = [];

  public expandedElement!: FoodCourt;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private httpService: HttpService) {
    this.foodCourtBehaviourSubject = new BehaviorSubject<Array<any>>([]);
  }

  get foodCourt$(): Observable<Array<FoodCourt>> {
    return this.foodCourtBehaviourSubject.asObservable();
  }

  get icons() {
    return { cilDelete, cilPencil, cilShieldAlt, cilArrowThickRight, cilArrowThickBottom, cilArrowThickTop }
  }

  get colDefs() {
    return foodCourtDisplayColumn;
  }

  ngOnInit(): void {
    this.httpService.getHTTP('foodcourt').subscribe((foodCourts: FoodCourt[]) => {
      this.foodCourtDataList = foodCourts;
      this.foodCourtBehaviourSubject.next(this.foodCourtDataList);
    })
  }

  onAddNewFoodCourt(newFoodCourt: any) {
    const foodCounter = <FoodCourt>{
      FOOD_COURT_NAME: newFoodCourt.foodCourtName,
      BUILDING_NAME: newFoodCourt.buildingName,
      STREET_NAME: newFoodCourt.streetName,
      CITY: newFoodCourt.city,
      PINCODE: newFoodCourt.pincode,
      STATE: newFoodCourt.state,
      COUNTRY: newFoodCourt.country,
      BUILDING_ID: 1,
      COMPANY_ID: 1
    }

    this.httpService.postHTTP('foodcourt', foodCounter).subscribe(data => {
      console.log(data)
    })
  }

  onEdit(data: any) {
    this.editFoodCourt = data;
  }

  onDelete(id: number) {
    // const foodCourtList: Array<any> = [];
    // for (let index = 0; index < this.foodCourtDataList.length; index++) {
    //   const element = this.foodCourtDataList[index];
    //   if (element.id !== id) {
    //     foodCourtList.push(element);
    //   }
    // }
    // this.foodCourtDataList = foodCourtList;
    // this.foodCourtBehaviourSubject.next(this.foodCourtDataList);
  }

  onView(element: FoodCourt) {
    //this.router.navigate(['counter/1'], { relativeTo: this.activeRoute.parent });
    this.expandedElement = this.expandedElement == element ? <FoodCourt>{} : element;
  }

  rowSelect(data: any) {
    console.log(data)
  }
}
