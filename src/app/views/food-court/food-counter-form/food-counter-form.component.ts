import { Component, ElementRef, EventEmitter, HostListener, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cilPlus } from '@coreui/icons';
import { FoodCounter } from 'src/app/models/food-counter.model';

@Component({
  selector: 'app-food-counter-form',
  templateUrl: './food-counter-form.component.html',
  styleUrl: './food-counter-form.component.scss'
})
export class FoodCounterFormComponent {
  counterForm: FormGroup;

  @Input() counterFormInfo!: FoodCounter;

  @Output() addNewForm: EventEmitter<FoodCounter> = new EventEmitter();
  @ViewChild('cModalToggleButton') cModalToggleButton!: ElementRef<HTMLElement>;
  icons = { cilPlus };
  constructor(private formBuilder: FormBuilder) {
    this.counterForm = this.formBuilder.group({
      id: [-1],
      counterName: ['', Validators.required],
      counterDesc: ['', Validators.required],
      cousine: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cModalToggleButton?.nativeElement.click();
    if (!this.counterFormInfo?._ID) {
      return;
    }

    this.counterForm.setValue({
      id: this.counterFormInfo._ID,
      counterName: this.counterFormInfo.COUNTER_NAME,
      counterDesc: this.counterFormInfo.COUNTER_DESCl,
      cousine: this.counterFormInfo.COUSINE,
    })
  }
  onSubmit() {
    const foodCounter = <FoodCounter>{
      COUNTER_NAME: this.counterForm.value['counterName'],
      COUNTER_DESCl: this.counterForm.value['counterDesc'],
      COUSINE: this.counterForm.value['cousine'],
    }

    this.addNewForm.emit(foodCounter);
    this.counterForm.reset();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.counterForm.reset()
  }
}