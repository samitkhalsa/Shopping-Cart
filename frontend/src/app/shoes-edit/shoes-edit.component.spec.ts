import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesEditComponent } from './shoes-edit.component';

describe('ShoesEditComponent', () => {
  let component: ShoesEditComponent;
  let fixture: ComponentFixture<ShoesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
