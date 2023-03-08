import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCareerComponent } from './accordion-career.component';

describe('AccordionCareerComponent', () => {
  let component: AccordionCareerComponent;
  let fixture: ComponentFixture<AccordionCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
