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

import { InvoiceComponent } from './invoice.component';
import { InvoiceListViewComponent } from './invoice-list-view/invoice-list-view.component';

import { HttpService } from '../../services/http.service';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '', component: InvoiceComponent,
    children: [
      {
        path: 'invoices', component: InvoiceListViewComponent,
        data: { title: `Invoices` }
      },      
      { path: '', redirectTo: 'invoices', pathMatch: 'full' }
    ]
  },
];

@NgModule({
    declarations: [InvoiceComponent, InvoiceListViewComponent],
    providers: [HttpService],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),HttpClientModule,
        IconModule, ReactiveFormsModule, FormsModule, CardModule, FormDirective,
        ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent,
        ModalModule, GridModule, RowComponent, ColComponent, TableModule, FormLabelDirective, FormControlDirective, AvatarComponent,FormCheckInputDirective,FormCheckComponent,
        FormCheckLabelDirective 
      ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
}
)
export class invoiceModule{

}