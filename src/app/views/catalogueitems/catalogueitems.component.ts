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
  // onAddNewFoodCourt(newFoodCourt: any) {
  //   this.menuItemList.push(newFoodCourt);
  //   this.menuItemsSubject.next(this.menuItemList);
  // }
}
