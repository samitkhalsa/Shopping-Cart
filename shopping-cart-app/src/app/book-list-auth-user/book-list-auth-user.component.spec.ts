import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListAuthUserComponent } from './book-list-auth-user.component';

describe('BookListAuthUserComponent', () => {
  let component: BookListAuthUserComponent;
  let fixture: ComponentFixture<BookListAuthUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListAuthUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListAuthUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
