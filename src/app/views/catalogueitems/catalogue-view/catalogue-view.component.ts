import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import mainmenudata from '../../../../assets/data/mainmenu.json'

@Component({
  selector: 'app-catalogue-view', 
  templateUrl: './catalogue-view.component.html',
  styleUrl: './catalogue-view.component.scss',
})
export class CatalogueViewComponent {
  private menuItemsSubject: BehaviorSubject<any[]>;
  public saveEnable: boolean = false;
  public editmenuitem: any = {};
  private menuItemList: any[] = JSON.parse(JSON.stringify(mainmenudata));
  constructor() {
    this.menuItemsSubject = new BehaviorSubject<any[]>([]);
  }

  get menuItems$(): Observable<any> {
    return this.menuItemsSubject.asObservable();
  }
  ngOnInit(): void {
    this.menuItemsSubject.next(this.menuItemList);
  }
  onAddNewMenu(newFoodCourt: any) {
    if (newFoodCourt.id == -1) {
      newFoodCourt.id = this.menuItemList.length + 1;
    }

    let changed = false;
    for (let index = 0; index < this.menuItemList.length; index++) {
      const element = this.menuItemList[index];
      if (element.id == newFoodCourt.id) {
        this.menuItemList[index] = newFoodCourt;
        changed = true;
      }
    }

    if (!changed) {
      this.menuItemList.push(newFoodCourt);
    }

    this.menuItemsSubject.next(this.menuItemList);
  }

  onEdit(data: any) {
    this.editmenuitem = data;
  }

  onDelete(id: number) {
    const foodCourtList: Array<any> = [];
    for (let index = 0; index < this.menuItemList.length; index++) {
      const element = this.menuItemList[index];
      if (element.id !== id) {
        foodCourtList.push(element);
      }
    }
    this.menuItemList = foodCourtList;
    this.menuItemsSubject.next(this.menuItemList);
  }
}
