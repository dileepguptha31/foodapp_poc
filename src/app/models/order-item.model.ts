interface orderitem {
    _ID: number,
    ORDER_ID: number,
    QUANTITY: number,
    PRICE: number,
    CGST: number,
    SGST: number,
    FOOD_COUTER_MENU_ITEM_ID: number
}

export interface OrderItem {
    id: number;
    name: string;
    quantity: number;
    cgst: number;
    sgst: number;
    price: number
}