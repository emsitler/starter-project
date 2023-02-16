import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingReleasesComponent } from './trending-releases.component';

describe('TrendingReleasesComponent', () => {
  let component: TrendingReleasesComponent;
  let fixture: ComponentFixture<TrendingReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingReleasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
