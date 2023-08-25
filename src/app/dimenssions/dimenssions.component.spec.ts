import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimenssionsComponent } from './dimenssions.component';

describe('DimenssionsComponent', () => {
  let component: DimenssionsComponent;
  let fixture: ComponentFixture<DimenssionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimenssionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimenssionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
