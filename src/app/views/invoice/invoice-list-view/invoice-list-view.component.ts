import { Component } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { cilArrowThickBottom, cilArrowThickTop, cilDelete, cilPencil } from '@coreui/icons';
import { invoidDisplayColumns, menuItemDisplayColumns } from 'src/app/models/table-column-def';
import { Invoice } from 'src/app/models/invoice.model';
import { OrderItem } from 'src/app/models/order-item.model';

@Component({
  selector: 'app-invoice-list-view',
  templateUrl: './invoice-list-view.component.html',
  styleUrl: './invoice-list-view.component.scss'
})
export class InvoiceListViewComponent {

  items: Invoice[] = [
    {
      id: 1,
      orderno: '5A889B6',
      invoiceno: 'Inv_1_5A889B6',
      orderitems: [
        { id: 101, name: 'Chicken Biryani', quantity: 1, price: 250, cgst: 6, sgst: 6 },
        { id: 102, name: 'Veg Biryani', quantity: 1, price: 200, cgst: 6, sgst: 6 }
      ],
      cgst: 6,
      sgst: 6,
      totalprice: 450,
      datetime: new Date(2024, 5, 22, 14, 30, 0, 0),
      expanded: false
    },
    {
      id: 2,
      orderno: '6C880B7',
      invoiceno: 'Inv_2_6C880B7',
      orderitems: [
        { id: 201, name: 'French Fries', quantity: 2, price: 100, cgst: 6, sgst: 6 },
        { id: 202, name: 'Vennila Ice cream', quantity: 1, price: 45, cgst: 6, sgst: 6 }
      ],
      cgst: 6,
      sgst: 6,
      totalprice: 450,
      datetime: new Date(2024, 5, 23, 14, 30, 0, 0),
      expanded: false
    }
  ];
  public expandedElement!: Invoice;
  private invoices: Invoice[] = [];
  private InvoicesSubject: BehaviorSubject<Array<Invoice>>;

  get invoices$(): Observable<Array<Invoice>> {
    return this.InvoicesSubject.asObservable();
  }

  get icons() {
    return { cilDelete, cilPencil, cilArrowThickTop, cilArrowThickBottom }
  }

  get colDefs() {
    return invoidDisplayColumns;
  }

  constructor(private router: Router, private activeRoute: ActivatedRoute, private httpService: HttpService) {
    this.InvoicesSubject = new BehaviorSubject<Array<Invoice>>([]);
  }

  ngOnInit(): void {
    // this.menuItemsSubject.next(this.menuItemList);

    this.httpService.getHTTP('invoice').subscribe((invoices: any) => {
      this.invoices = invoices;
      this.InvoicesSubject.next(this.invoices);
    })
  }

  toggleExpand(item: Invoice) {
    item.expanded = !item.expanded;
  }

  onEdit(data: any) {
  }
  onView(element: any) {
    this.expandedElement = this.expandedElement == element ? <Invoice>{} : element;
  }
}



