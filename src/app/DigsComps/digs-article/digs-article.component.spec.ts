import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigsArticleComponent } from './digs-article.component';

describe('DigsArticleComponent', () => {
  let component: DigsArticleComponent;
  let fixture: ComponentFixture<DigsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigsArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
