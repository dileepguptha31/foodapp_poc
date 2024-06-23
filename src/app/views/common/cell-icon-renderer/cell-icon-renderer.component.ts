import { Component } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition, faCoffee, faEraser, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { ICellRendererAngularComp } from 'ag-grid-angular'
import { ICellRendererParams, } from 'ag-grid-community';

@Component({
  selector: 'app-cell-icon-renderer',
  template: `<fa-icon [icon]="displayIcon"></fa-icon>`,
  styles: ``
})
export class CellIconRendererComponent implements ICellRendererAngularComp {
  private fontIcon: IconDefinition = faCoffee;
  get displayIcon(): IconDefinition {
    return this.fontIcon;
  }
  agInit(params: ICellRendererParams<any, any, any>): void {
    console.log(params)
    if (!params.colDef?.headerName) {
      return;
    }

    switch (params.colDef?.headerName) {
      case 'Edit':
        this.fontIcon = faEdit;
        break;
      case 'Delete':
        this.fontIcon = faEraser;
        break;
      case 'View':
        this.fontIcon = faStreetView;
        break;
      default:
        break;
    }

  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }

}
