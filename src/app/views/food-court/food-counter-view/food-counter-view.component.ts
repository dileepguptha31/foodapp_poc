import { Component, Input } from '@angular/core';
import { cilShieldAlt, cilDelete, cilPencil, cilArrowThickRight } from '@coreui/icons';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { FoodCounter } from 'src/app/models/food-counter.model';
import { foodCounterDisplayColumn } from 'src/app/models/table-column-def';
import { FoodCourt } from 'src/app/models/food-court.model';

@Component({
  selector: 'app-food-counter-view',
  templateUrl: './food-counter-view.component.html',
  styleUrl: './food-counter-view.component.scss'
})
export class FoodCounterViewComponent {
  private counterBehaviourSubject: BehaviorSubject<Array<FoodCounter>>;
  public editedCounterData: FoodCounter = <FoodCounter>{};
  private counterDataList: Array<FoodCounter> = [];
  icons = { cilDelete, cilPencil, cilShieldAlt, cilArrowThickRight };

  public expandedElement!: FoodCounter;

  @Input('foodCourt') foodCourt!: FoodCourt;
  constructor(private httpService: HttpService) {
    this.counterBehaviourSubject = new BehaviorSubject<Array<any>>([]);
  }

  get foodCourt$(): Observable<Array<FoodCounter>> {
    return this.counterBehaviourSubject.asObservable();
  }
  get colDefs() {
    return foodCounterDisplayColumn;
  }

  get editCounter(): FoodCounter {
    return this.editedCounterData;
  }

  ngOnInit(): void {

    this.httpService.getHTTP('foodCounter').subscribe((foodCourts: FoodCounter[]) => {
      this.counterDataList = foodCourts;
      this.counterBehaviourSubject.next(this.counterDataList);
    })

  }
  onAddCounter(newCounter: FoodCounter) {

    newCounter._ID = this.counterDataList.length + 1;
    newCounter.FOOD_COURT_ID = this.foodCourt._ID;

    console.log(newCounter)
    this.httpService.postHTTP('foodcourt', newCounter).subscribe(data => {
      console.log(data)
    });
  }

  onEdit(data: any) {
    console.log('selectec outner')
    this.editedCounterData = data;
  }

  onDelete(id: number) {
    // const counterList: Array<any> = [];
    // for (let index = 0; index < this.counterDataList.length; index++) {
    //   const element = this.counterDataList[index];
    //   if (element.id !== id) {
    //     counterList.push(element);
    //   }
    // }
    // this.counterDataList = counterList;
    // this.counterBehaviourSubject.next(this.counterDataList);
  }
}