
import { ColDef } from 'ag-grid-community';
import { CellIconRendererComponent } from 'src/app/views/common/cell-icon-renderer/cell-icon-renderer.component';

// FoodCourt Model Columns
export const foodCourtColDef: ColDef[] = [
    { field: "FOOD_COURT_NAME", headerName: "Food Court Name", minWidth: 150, cellRenderer: "agGroupCellRenderer" },
    { field: "BUILDING_NAME", headerName: "Building Name" },
    { field: "STREET_NAME", headerName: "Street" },
    { field: "CITY", headerName: "City" },
    { field: "PINCODE", headerName: "Pincode" },
    { field: "STATE", headerName: "State" },
    { field: "COUNTRY", headerName: "Country" },
    { field: "", headerName: "Edit", rowDrag: false, cellRenderer: CellIconRendererComponent, cellRendererParams: { viewType: 'edit' } },
    { field: "", headerName: "Delete", rowDrag: false, cellRenderer: CellIconRendererComponent, cellRendererParams: { viewType: 'edit' } },
];