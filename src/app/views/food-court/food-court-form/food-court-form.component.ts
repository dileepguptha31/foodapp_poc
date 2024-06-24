import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cilPlus } from '@coreui/icons';
import { FoodCourt } from 'src/app/models/food-court.model';

@Component({
  selector: 'app-food-court-form',
  templateUrl: './food-court-form.component.html',
  styleUrl: './food-court-form.component.scss'
})
export class FoodCourtFormComponent implements OnChanges {

  foodCourtForm: FormGroup;

  @Input() foodCourtFormInfo!: FoodCourt;

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

    if (!this.foodCourtFormInfo?._ID) {
      return;
    }
    this.foodCourtForm.setValue({
      id: this.foodCourtFormInfo._ID,
      foodCourtName: this.foodCourtFormInfo.FOOD_COURT_NAME,
      buildingName: this.foodCourtFormInfo.BUILDING_NAME,
      streetName: this.foodCourtFormInfo.STREET_NAME,
      city: this.foodCourtFormInfo.CITY,
      pincode: this.foodCourtFormInfo.PINCODE,
      state: this.foodCourtFormInfo.STATE,
      country: this.foodCourtFormInfo.COUNTRY,
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