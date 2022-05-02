import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesInCategoryComponent } from './movies-in-category.component';

describe('MoviesInCategoryComponent', () => {
  let component: MoviesInCategoryComponent;
  let fixture: ComponentFixture<MoviesInCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesInCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesInCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
