import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigsNavbarComponent } from './digs-navbar.component';

describe('DigsNavbarComponent', () => {
  let component: DigsNavbarComponent;
  let fixture: ComponentFixture<DigsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigsNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
