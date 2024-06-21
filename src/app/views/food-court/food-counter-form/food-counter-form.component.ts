import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { cilPlus } from '@coreui/icons';

@Component({
  selector: 'app-food-counter-form',
  templateUrl: './food-counter-form.component.html',
  styleUrl: './food-counter-form.component.scss'
})
export class FoodCounterFormComponent {
  foodCourtForm: FormGroup;

  @Input() foodCourtFormInfo: any;

  @Output() addNewForm: EventEmitter<string> = new EventEmitter();
  icons = { cilPlus };
  constructor(private formBuilder: FormBuilder) {
    this.foodCourtForm = this.formBuilder.group({
      id: [-1],
      // foodCourtName: ['', Validators.required],
      // buildingName: ['', Validators.required],
      // streetName: ['', Validators.required],
      // city: ['', Validators.required],
      // pincode: ['', Validators.required],
      // state: ['', Validators.required],
      // country: ['', Validators.required],
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
}
