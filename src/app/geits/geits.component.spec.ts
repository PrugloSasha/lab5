import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeitsComponent } from './geits.component';

describe('GeitsComponent', () => {
  let component: GeitsComponent;
  let fixture: ComponentFixture<GeitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
