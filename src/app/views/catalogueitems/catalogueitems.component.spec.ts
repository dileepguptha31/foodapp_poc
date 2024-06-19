import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueitemsComponent } from './catalogueitems.component';

describe('CatalogueitemsComponent', () => {
  let component: CatalogueitemsComponent;
  let fixture: ComponentFixture<CatalogueitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogueitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogueitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
