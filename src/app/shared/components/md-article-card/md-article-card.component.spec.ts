import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdArticleCardComponent } from './md-article-card.component';

describe('MdArticleCardComponent', () => {
  let component: MdArticleCardComponent;
  let fixture: ComponentFixture<MdArticleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdArticleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
