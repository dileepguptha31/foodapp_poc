import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cilPlus } from '@coreui/icons';

@Component({
  selector: 'app-menu-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './menu-item-detail.component.html',
  styleUrl: './menu-item-detail.component.scss'
})
export class MenuItemDetailComponent {
  menuitemdetailform: FormGroup;

  @Input() menuitemdetail: any;

  @Output() addNewForm: EventEmitter<string> = new EventEmitter();
  icons = { cilPlus };

  @ViewChild('cModalToggleButton') cModalToggleButton!: ElementRef<HTMLElement>;
  constructor(private formBuilder: FormBuilder) {
    this.menuitemdetailform = this.formBuilder.group({
      id: [-1],
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      status: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.cModalToggleButton?.nativeElement.click();
    const menuitemEditForm: any = changes["menuitemdetail"].currentValue;
    if (!menuitemEditForm.id) {
      return;
    }
    this.menuitemdetailform.setValue({
      id: menuitemEditForm.id,
      name: menuitemEditForm.name,
      description: menuitemEditForm.description,
      category: menuitemEditForm.category,
      subcategory: menuitemEditForm.subcategory,
      status: menuitemEditForm.status,
      price: menuitemEditForm.price,
      image: menuitemEditForm.image,
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

  onClearForm() {

  }
}
