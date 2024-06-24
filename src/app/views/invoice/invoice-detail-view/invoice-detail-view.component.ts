import { Component, Input } from '@angular/core';
import { cilDelete, cilPencil } from '@coreui/icons';
import { BehaviorSubject, Observable } from 'rxjs';
import { Invoice } from 'src/app/models/invoice.model';
import { OrderItem } from 'src/app/models/order-item.model';
import { foodCounterDisplayColumn, invoidOrderDisplayColumns } from 'src/app/models/table-column-def';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-invoice-detail-view',
  templateUrl: './invoice-detail-view.component.html',
  styleUrl: './invoice-detail-view.component.scss'
})
export class InvoiceDetailViewComponent {
  private invoiceOrderBehaviourSubject: BehaviorSubject<Array<OrderItem>>;
  public editedInvoiceOrderData: OrderItem = <OrderItem>{};
  @Input('orderList') invoiceOrderDataList: Array<OrderItem> = [];
  icons = { cilDelete, cilPencil };


  public expandedElement!: OrderItem;
  constructor(private httpService: HttpService) {
    this.invoiceOrderBehaviourSubject = new BehaviorSubject<Array<OrderItem>>([]);
  }

  get foodCourt$(): Observable<Array<OrderItem>> {
    return this.invoiceOrderBehaviourSubject.asObservable();
  }
  get colDefs() {
    return invoidOrderDisplayColumns;
  }

  get editCounter(): OrderItem {
    return this.editedInvoiceOrderData;
  }

  ngOnInit(): void {
    console.log(this.invoiceOrderDataList)
    // this.httpService.getHTTP('foodCounter').subscribe((foodCourts: OrderItem[]) => {
    //   this.invoiceOrderDataList = foodCourts;
    //   this.invoiceOrderBehaviourSubject.next(this.invoiceOrderDataList);
    // })
    this.invoiceOrderBehaviourSubject.next(this.invoiceOrderDataList);
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
    this.editedInvoiceOrderData = data;
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
