import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalModule } from '@coreui/angular';

@Component({
  selector: 'app-food-court-form',
  templateUrl: './food-court-form.component.html',
  styleUrl: './food-court-form.component.scss'
})
export class FoodCourtFormComponent implements OnChanges, OnInit {

  foodCourtForm: FormGroup;

  @Input() foodCourtFormInfo: any;

  @Output() addNewForm: EventEmitter<string> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.foodCourtForm = this.formBuilder.group({
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

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addNewForm.emit(this.foodCourtForm.value);
    this.foodCourtForm.reset();
  }

  onClearForm() {
    
  }
}
