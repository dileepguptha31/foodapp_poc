import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import {
  AvatarComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckLabelDirective,
  GridModule,
  GutterDirective,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TableDirective,
  TextColorDirective
} from '@coreui/angular';
import { WidgetsDropdownComponent } from '../widgets/widgets-dropdown/widgets-dropdown.component';
import { IconDirective, IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { CommonModule, NgStyle } from '@angular/common';
import { WidgetsBrandComponent } from '../widgets/widgets-brand/widgets-brand.component';
import { BehaviorSubject, Observable } from 'rxjs';
import {CatalogueItemsModule} from './catalogue-items.module';
import mainmenudata from '../../../assets/data/mainmenu.json'

@Component({
  selector: 'app-catalogueitems',
  standalone: true,
  imports: [ CatalogueItemsModule, CommonModule, IconModule, IconDirective, TextColorDirective, CardComponent, GridModule, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, ChartjsComponent, NgStyle, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, WidgetsBrandComponent, CardHeaderComponent, TableDirective, AvatarComponent],
  templateUrl: './catalogueitems.component.html',
  styleUrl: './catalogueitems.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CatalogueitemsComponent implements OnInit{

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
