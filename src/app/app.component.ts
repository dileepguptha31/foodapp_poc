import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { SpinnerModule } from '@coreui/angular';
import { LoaderService } from './services/loader.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './views/common/spinner/spinner.component';

@Component({
  selector: 'app-root',
  template: `  <router-outlet></router-outlet> <app-spinner></app-spinner>`,
  styles: '',
  standalone: true,
  imports: [RouterOutlet, SpinnerModule, CommonModule, SpinnerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  title = 'CoreUI Angular Admin Template';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService,
    private loaderService: LoaderService
  ) {
    this.titleService.setTitle(this.title);
    // iconSet singleton
    this.iconSetService.icons = { ...iconSubset };
  }

  get loader(): Observable<boolean> {
    return this.loaderService.loader$;
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
