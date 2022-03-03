import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectproComponent } from './selectpro.component';

describe('SelectproComponent', () => {
  let component: SelectproComponent;
  let fixture: ComponentFixture<SelectproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
