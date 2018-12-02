import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesCreateComponent } from './shoes-create.component';

describe('ShoesCreateComponent', () => {
  let component: ShoesCreateComponent;
  let fixture: ComponentFixture<ShoesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
