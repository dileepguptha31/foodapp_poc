import { Component, Input } from '@angular/core';
import { cilShieldAlt, cilDelete, cilPencil, cilArrowThickRight, cilViewColumn } from '@coreui/icons';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { FoodCounter } from 'src/app/models/food-counter.model';
import { foodCounterDisplayColumn } from 'src/app/models/table-column-def';
import { FoodCourt } from 'src/app/models/food-court.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food-counter-view',
  templateUrl: './food-counter-view.component.html',
  styleUrl: './food-counter-view.component.scss'
})
export class FoodCounterViewComponent {
  private counterBehaviourSubject: BehaviorSubject<Array<FoodCounter>>;
  public editedCounterData: FoodCounter = <FoodCounter>{};
  private counterDataList: Array<FoodCounter> = [];
  icons = { cilViewColumn, cilPencil, cilShieldAlt };

  public expandedElement!: FoodCounter;

  @Input('foodCourt') foodCourt!: FoodCourt;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private httpService: HttpService) {
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
    this.editedCounterData = data;
  }

  onView(data: any) {
    this.router.navigate(['counter/1'], { relativeTo: this.activeRoute.parent });
  }
}