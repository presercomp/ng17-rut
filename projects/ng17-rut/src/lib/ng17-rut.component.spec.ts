import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng17RutComponent } from './ng17-rut.component';

describe('Ng17RutComponent', () => {
  let component: Ng17RutComponent;
  let fixture: ComponentFixture<Ng17RutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ng17RutComponent]
    });
    fixture = TestBed.createComponent(Ng17RutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
