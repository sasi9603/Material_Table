import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattableComponent } from './mattable.component';

describe('MattableComponent', () => {
  let component: MattableComponent;
  let fixture: ComponentFixture<MattableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MattableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MattableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
