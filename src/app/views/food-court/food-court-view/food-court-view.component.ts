import { Component, ViewChild, viewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import foodCourtData from './../../../../assets/data/food-court.json';
import { cilShieldAlt, cilDelete, cilPencil, cilArrowThickRight } from '@coreui/icons';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ColDef, GridOptions } from 'ag-grid-community';
import { FoodCourt } from 'src/app/models/food-court.model'
import { DetailCellRenderer } from '../food-counter-view/food-counter-view'
import { foodCourtDisplayColumn } from 'src/app/models/table-column-def';

@Component({
  selector: 'app-food-court-view',
  templateUrl: './food-court-view.component.html',
  styleUrl: './food-court-view.component.scss'
})
export class FoodCourtViewComponent {
  private foodCourtBehaviourSubject: BehaviorSubject<Array<FoodCourt>> = new BehaviorSubject<Array<any>>([]);
  public editFoodCourtData: FoodCourt = <FoodCourt>{};
  private foodCourtDataList: Array<FoodCourt> = [];

  public expandedElement!: FoodCourt;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private httpService: HttpService) {
    this.foodCourtBehaviourSubject = new BehaviorSubject<Array<any>>(this.foodCourtDataList);
  }

  get foodCourt$(): Observable<Array<FoodCourt>> {
    return this.foodCourtBehaviourSubject.asObservable();
  }

  get icons() {
    return { cilDelete, cilPencil, cilShieldAlt, cilArrowThickRight }
  }

  get colDefs() {
    return foodCourtDisplayColumn;
  }

  get editFoodCourt(): FoodCourt {
    return this.editFoodCourtData;
  }

  get gridOptions(): GridOptions {
    return {
      autoSizeStrategy: {
        type: 'fitGridWidth',
        defaultMinWidth: 100,
      }, defaultColDef: {
        resizable: false,
      }, pagination: true,
      masterDetail: true,
      detailCellRenderer: DetailCellRenderer,
      onFirstDataRendered: (params) => {
        setTimeout(() => {
          params.api.getDisplayedRowAtIndex(1)?.setExpanded(true);
        }, 0);
      },
    }
  }


  ngOnInit(): void {

    this.httpService.getHTTP('foodcourt').subscribe((foodCourts: FoodCourt[]) => {
      this.foodCourtDataList = foodCourts;
      this.foodCourtBehaviourSubject.next(this.foodCourtDataList);
    })

  }


  onAddNewFoodCourt(newFoodCourt: any) {
    // if (newFoodCourt.id == -1) {
    //   newFoodCourt.id = this.foodCourtDataList.length + 1;
    // }

    // let changed = false;
    // for (let index = 0; index < this.foodCourtDataList.length; index++) {
    //   const element = this.foodCourtDataList[index];
    //   if (element.id == newFoodCourt.id) {
    //     this.foodCourtDataList[index] = newFoodCourt;
    //     changed = true;
    //   }
    // }

    // if (!changed) {
    //   this.foodCourtDataList.push(newFoodCourt);
    // }

    // this.foodCourtBehaviourSubject.next(this.foodCourtDataList);

    const foodCounter = <FoodCourt>{
      FOOD_COURT_NAME: newFoodCourt.foodCourtName,
      BUILDING_NAME: newFoodCourt.buildingName,
      STREET_NAME: newFoodCourt.streetName,
      CITY: newFoodCourt.city,
      PINCODE: newFoodCourt.pincode,
      STATE: newFoodCourt.state,
      COUNTRY: newFoodCourt.country,
    }

    this.httpService.postHTTP('foodcourt', foodCounter).subscribe(data => {
      console.log(data)
    })
  }

  onEdit(data: any) {
    this.editFoodCourtData = data;
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

  onView(id: number) {
    this.router.navigate(['counter/1'], { relativeTo: this.activeRoute.parent });
  }
}
