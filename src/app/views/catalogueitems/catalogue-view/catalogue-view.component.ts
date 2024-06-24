import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import mainmenudata from '../../../../assets/data/mainmenu.json'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { catalogueitem } from '../../../models/catalogue-item.model'
import { menuItemDisplayColumns } from 'src/app/models/table-column-def';
import { cilDelete, cilPencil } from '@coreui/icons';
@Component({
  selector: 'app-catalogue-view',
  templateUrl: './catalogue-view.component.html',
  styleUrl: './catalogue-view.component.scss',
})
export class CatalogueViewComponent {
  private menuItemsSubject: BehaviorSubject<catalogueitem[]>;
  public saveEnable: boolean = false;
  public editmenuitem: any = {};
  private menuItemList: catalogueitem[] = [];
  constructor(private router: Router, private activeRoute: ActivatedRoute, private httpService: HttpService) {
    this.menuItemsSubject = new BehaviorSubject<catalogueitem[]>([]);
  }

  get menuItems$(): Observable<catalogueitem[]> {
    return this.menuItemsSubject.asObservable();
  }

  get icons() {
    return { cilDelete, cilPencil }
  }

  get colDefs() {
    return menuItemDisplayColumns;
  }

  ngOnInit(): void {

    this.httpService.getHTTP('CatalogueItem').subscribe((foodCourt: any) => {
      this.menuItemList = foodCourt;
      this.menuItemsSubject.next(this.menuItemList);
    });
  }

  onAddNewMenu(newFoodCourt: any) {
    if (newFoodCourt._ID == -1) {
      newFoodCourt._ID = this.menuItemList.length + 1;
    }

    let changed = false;
    for (let index = 0; index < this.menuItemList.length; index++) {
      const element = this.menuItemList[index];
      if (element._ID == newFoodCourt._ID) {
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
      if (element._ID !== id) {
        foodCourtList.push(element);
      }
    }
    this.menuItemList = foodCourtList;
    this.menuItemsSubject.next(this.menuItemList);
  }
}
