import { Component, ElementRef, EventEmitter, HostListener, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cilPlus } from '@coreui/icons';

@Component({
  selector: 'app-food-counter-form',
  templateUrl: './food-counter-form.component.html',
  styleUrl: './food-counter-form.component.scss'
})
export class FoodCounterFormComponent {
  counterForm: FormGroup;

  @Input() counterFormInfo: any;

  @Output() addNewForm: EventEmitter<string> = new EventEmitter();
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
    const footCourtEditForm: any = changes["counterFormInfo"].currentValue;
    if (!footCourtEditForm.id) {
      return;
    }
    this.counterForm.setValue({
      id: footCourtEditForm.id,
      counterName: footCourtEditForm.counterName,
      counterDesc: footCourtEditForm.counterDesc,
      cousine: footCourtEditForm.cousine,
    })
  }
  onSubmit() {
    this.addNewForm.emit(this.counterForm.value);
    this.counterForm.reset();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    console.log(`escape pressed`);
    this.counterForm.reset()
  }
}
