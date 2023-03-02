import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscogsDigsComponent } from './discogs-digs.component';

describe('DiscogsDigsComponent', () => {
  let component: DiscogsDigsComponent;
  let fixture: ComponentFixture<DiscogsDigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscogsDigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscogsDigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
