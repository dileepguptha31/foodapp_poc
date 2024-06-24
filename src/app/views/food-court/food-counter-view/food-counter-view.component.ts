import { Component } from '@angular/core';
import { cilShieldAlt, cilDelete, cilPencil, cilArrowThickRight } from '@coreui/icons';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { FoodCounter } from 'src/app/models/food-counter.model';
import { foodCounterDisplayColumn } from 'src/app/models/table-column-def';

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
  onAddCounter(newCounter: any) {
    // if (newCounter.id == -1) {
    //   newCounter.id = this.counterDataList.length + 1;
    // }

    // let changed = false;
    // for (let index = 0; index < this.counterDataList.length; index++) {
    //   const element = this.counterDataList[index];
    //   if (element.id == newCounter.id) {
    //     this.counterDataList[index] = newCounter;
    //     changed = true;
    //   }
    // }

    // if (!changed) {
    //   this.counterDataList.push(newCounter);
    // }

    // this.counterBehaviourSubject.next(this.counterDataList);
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