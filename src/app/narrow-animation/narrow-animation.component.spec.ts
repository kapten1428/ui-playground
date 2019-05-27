import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrowAnimationComponent } from './narrow-animation.component';

describe('NarrowAnimationComponent', () => {
  let component: NarrowAnimationComponent;
  let fixture: ComponentFixture<NarrowAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrowAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarrowAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
