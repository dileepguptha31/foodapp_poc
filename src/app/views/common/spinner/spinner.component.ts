import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../../services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class SpinnerComponent {

  constructor(private loaderService: LoaderService) { }

  get loader(): Observable<boolean> {
    return this.loaderService.loader$;
  }
}
