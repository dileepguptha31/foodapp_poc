import { Component, Input } from '@angular/core';
import { cilShieldAlt, cilDelete, cilPencil, cilArrowThickRight, cilViewColumn } from '@coreui/icons';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { CatalogueItem } from 'src/app/models/catalogue-item.model';
import { foodCounterDisplayColumn, foodCounterMenusDisplayColumn } from 'src/app/models/table-column-def';
import { FoodCourt } from 'src/app/models/food-court.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-food-counter-menu',
  templateUrl: './food-counter-menu.component.html',
  styleUrl: './food-counter-menu.component.scss'
})
export class FoodCounterMenuComponent {
  private counterMenuItemsBehaviourSubject: BehaviorSubject<Array<CatalogueItem>>;
  public editedCounterMenuData: CatalogueItem = <CatalogueItem>{};
  private counterMenuDataList = new MatTableDataSource<CatalogueItem>([]);;
  icons = { cilViewColumn, cilPencil, cilShieldAlt };

  public expandedElement!: CatalogueItem;

  @Input('foodCourt') foodCourt!: FoodCourt;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private httpService: HttpService) {
    this.counterMenuItemsBehaviourSubject = new BehaviorSubject<Array<any>>([]);
  }

  get counterMenus$(): Observable<Array<CatalogueItem>> {
    return this.counterMenuItemsBehaviourSubject.asObservable();
  }
  get colDefs() {
    return foodCounterMenusDisplayColumn;
  }

  get editCounter(): CatalogueItem {
    return this.editedCounterMenuData;
  }

  selection = new SelectionModel<CatalogueItem>(true, []);

  ngOnInit(): void {

    this.httpService.getHTTP('CatalogueItem').subscribe((foodCourts: CatalogueItem[]) => {
      this.counterMenuDataList.data = foodCourts;
      this.counterMenuItemsBehaviourSubject.next(this.counterMenuDataList.data);
    })

  }

  selectHandler(row: CatalogueItem) {
    if (!this.selection.isSelected(row)) {
      this.selection.clear();
    }
    this.selection.toggle(row);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.counterMenuDataList.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.counterMenuDataList.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: CatalogueItem): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }

  onEdit(data: any) {
    this.editedCounterMenuData = data;
  }

  onView(data: any) {
    this.router.navigate(['counter/1'], { relativeTo: this.activeRoute.parent });
  }
}
