import { OrderItem } from "./order-item.model";

interface invoice {
    _ID: number,
    INVOICE_DATE: Date,
    INVOICE_NO: number,
    ORDER_ID: number
}
export interface Invoice {
    id: number;
    orderno: string;
    invoiceno: string;
    orderitems: OrderItem[];
    cgst: number;
    sgst: number;
    totalprice: number,
    datetime: Date,
    expanded: boolean
}
