import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionChooseComponent } from './fashion-choose.component';

describe('FashionChooseComponent', () => {
  let component: FashionChooseComponent;
  let fixture: ComponentFixture<FashionChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
