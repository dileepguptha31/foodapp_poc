import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalModule } from '@coreui/angular';
import { cilPlus } from '@coreui/icons';

@Component({
  selector: 'app-food-court-form',
  templateUrl: './food-court-form.component.html',
  styleUrl: './food-court-form.component.scss'
})
export class FoodCourtFormComponent implements OnChanges {

  foodCourtForm: FormGroup;

  @Input() foodCourtFormInfo: any;

  @Output() addNewForm: EventEmitter<string> = new EventEmitter();
  icons = { cilPlus };

  @ViewChild('cModalToggleButton') cModalToggleButton!: ElementRef<HTMLElement>;
  constructor(private formBuilder: FormBuilder) {
    this.foodCourtForm = this.formBuilder.group({
      id: [-1],
      foodCourtName: ['', Validators.required],
      buildingName: ['', Validators.required],
      streetName: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.cModalToggleButton?.nativeElement.click();
    const footCourtEditForm: any = changes["foodCourtFormInfo"].currentValue;
    if (!footCourtEditForm.id) {
      return;
    }
    this.foodCourtForm.setValue({
      id: footCourtEditForm.id,
      foodCourtName: footCourtEditForm.foodCourtName,
      buildingName: footCourtEditForm.buildingName,
      streetName: footCourtEditForm.streetName,
      city: footCourtEditForm.city,
      pincode: footCourtEditForm.pincode,
      state: footCourtEditForm.state,
      country: footCourtEditForm.country,
    })
  }

  onSubmit() {
    this.addNewForm.emit(this.foodCourtForm.value);
    this.foodCourtForm.reset();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    console.log(`escape pressed`);
    this.foodCourtForm.reset()
  }

  onClearForm() {

  }
}
