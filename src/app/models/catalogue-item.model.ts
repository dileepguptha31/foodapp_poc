// [
//     {
//         "_ID": 1,
//         "ITEM_NAME": "Veg Biryani",
//         "ITEM_DESC": "Flavoured rice with mix of spices and vegitab",
//         "ITEM_CATEGORY": "Main Course",
//         "ITEM_SUB_CATEGORY": "Lunch",
//         "ITEM_CUISINE": null,
//         "ITEM_CALORIES": "540k cal",
//         "ITEM_FAT": "45",
//         "ITEM_CARBOHYDRATES": "150",
//         "ITEM_PROTEINE": "50",
//         "ITEM_SODIUM": "10",
//         "ITEM_THUMNAIL": null,
//         "TEM_FULL_IMAGE": null,
//         "PREPARATION_TIME": "40 Mins",
//         "COOK_TIME": "30 mins",
//         "DIFFICULTY_LEVEL": "High",
//         "DIETARY_RESTRICTIONS": "Yes",
//         "CGST": "18",
//         "SGST": "18"
//     }
// ]

interface catalogueitem{
    _ID: number,
    ITEM_NAME: string,
    ITEM_DESC: string,
    ITEM_CATEGORY: string,
    ITEM_SUB_CATEGORY: string,
    ITEM_CUISINE: string,
    ITEM_CALORIES: string,
    ITEM_FAT: string,
    ITEM_CARBOHYDRATES: string,
    ITEM_PROTEINE: string,
    ITEM_SODIUM: string,
    ITEM_THUMNAIL: string,
    TEM_FULL_IMAGE: string,
    PREPARATION_TIME: string,
    COOK_TIME: string,
    DIFFICULTY_LEVEL: string,
    DIETARY_RESTRICTIONS: string,
    CGST: number,
    SGST: number,
}