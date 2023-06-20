import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatospersonalesComponent } from './datospersonales.component';

describe('DatospersonalesComponent', () => {
  let component: DatospersonalesComponent;
  let fixture: ComponentFixture<DatospersonalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatospersonalesComponent]
    });
    fixture = TestBed.createComponent(DatospersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
