import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingExampleComponent } from './sorting-example.component';

describe('SortingExampleComponent', () => {
  let component: SortingExampleComponent;
  let fixture: ComponentFixture<SortingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
