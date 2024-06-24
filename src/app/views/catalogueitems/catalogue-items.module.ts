import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '@coreui/icons-angular';
import {
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardModule,
  ColComponent,
  FormCheckComponent,
  FormCheckLabelDirective,
  FormCheckInputDirective,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  GridModule,
  ModalModule,
  RowComponent,
  TableModule,
  AvatarComponent,
} from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueitemsComponent } from './catalogueitems.component'
import { CatalogueViewComponent } from './catalogue-view/catalogue-view.component';
import { MenuItemDetailComponent } from './menu-item-detail/menu-item-detail.component'
import { HttpService } from '../../services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: '', component: CatalogueitemsComponent,
    children: [
      {
        path: 'menu-items', component: CatalogueViewComponent,
        data: { title: $localize`Menu Items` }
      },
      // {
      //   path: 'counter/:id', component: CatalogueViewComponent,
      //   data: { title: $localize`Food Counter` }
      // },
      { path: '', redirectTo: 'menu-items', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  declarations: [CatalogueViewComponent, CatalogueitemsComponent, MenuItemDetailComponent],
  exports: [],
  providers: [HttpService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), HttpClientModule,
    IconModule, ReactiveFormsModule, FormsModule, CardModule, FormDirective,
    ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent,
    ModalModule, GridModule, RowComponent, ColComponent, TableModule, FormLabelDirective, FormControlDirective, AvatarComponent, FormCheckInputDirective, FormCheckComponent,
    FormCheckLabelDirective,
    MatTableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CatalogueItemsModule { }
