import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cilPlus } from '@coreui/icons';
import { CatalogueItem } from 'src/app/models/catalogue-item.model';

@Component({
  selector: 'app-menu-item-detail',
  templateUrl: './menu-item-detail.component.html',
  styleUrl: './menu-item-detail.component.scss'
})
export class MenuItemDetailComponent {
  menuitemdetailform: FormGroup;

  @Input() menuitemdetailformInput: CatalogueItem = <CatalogueItem>{};
  @Output() addNewForm: EventEmitter<string> = new EventEmitter();
  icons = { cilPlus };

  @ViewChild('cModalToggleButton') cModalToggleButton!: ElementRef<HTMLElement>;
  constructor(private formBuilder: FormBuilder) {
    this.menuitemdetailform = this.formBuilder.group({
      id: [-1],
      name: ['', Validators.required],
      description: ['', Validators.nullValidator],
      category: ['', Validators.required],
      subcategory: ['', Validators.nullValidator],
      status: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.nullValidator],
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.cModalToggleButton?.nativeElement.click();
    console.log(this.menuitemdetailformInput);

    if (!this.menuitemdetailformInput?._ID) {
      return;
    }

    this.menuitemdetailform.setValue({
      id: this.menuitemdetailformInput._ID,
      name: this.menuitemdetailformInput.ITEM_NAME,
      description: this.menuitemdetailformInput.DIETARY_RESTRICTIONS,
      category: this.menuitemdetailformInput.ITEM_CALORIES,
      subcategory: this.menuitemdetailformInput.ITEM_SUB_CATEGORY,
      status: false,
      price: this.menuitemdetailformInput.CGST,
      image: this.menuitemdetailformInput.TEM_FULL_IMAGE,
    })
  }

  onSubmit() {
    this.addNewForm.emit(this.menuitemdetailform.value);
    this.menuitemdetailform.reset();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    console.log(`escape pressed`);
    this.menuitemdetailform.reset()
  }

  setMenuItemStatus(status: boolean) {

  }

  onClearForm() {

  }
}
