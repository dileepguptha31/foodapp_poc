import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ModalModule } from '@coreui/angular';

@Component({
  selector: 'app-food-court-form',
  templateUrl: './food-court-form.component.html',
  styleUrl: './food-court-form.component.scss'
})
export class FoodCourtFormComponent implements OnChanges, OnInit {


  @Output() fromSave: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }
}
