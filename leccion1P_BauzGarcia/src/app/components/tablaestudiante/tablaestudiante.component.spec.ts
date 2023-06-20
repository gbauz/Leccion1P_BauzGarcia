import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaestudianteComponent } from './tablaestudiante.component';

describe('TablaestudianteComponent', () => {
  let component: TablaestudianteComponent;
  let fixture: ComponentFixture<TablaestudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaestudianteComponent]
    });
    fixture = TestBed.createComponent(TablaestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
