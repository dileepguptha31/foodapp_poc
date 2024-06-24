import { Component } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition, faCoffee, faEraser, faStreetView } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cell-icon-renderer',
  template: `<fa-icon [icon]="displayIcon"></fa-icon>`,
  styles: ``
})
export class CellIconRendererComponent  {
  private fontIcon: IconDefinition = faCoffee;
  get displayIcon(): IconDefinition {
    return this.fontIcon;
  } 

}
