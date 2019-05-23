import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaInteractionComponent } from './va-interaction.component';

describe('VaInteractionComponent', () => {
  let component: VaInteractionComponent;
  let fixture: ComponentFixture<VaInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
