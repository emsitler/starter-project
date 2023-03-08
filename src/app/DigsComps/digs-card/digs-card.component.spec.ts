import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigsCardComponent } from './digs-card.component';

describe('DigsCardComponent', () => {
  let component: DigsCardComponent;
  let fixture: ComponentFixture<DigsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
