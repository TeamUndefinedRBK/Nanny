import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannyFormComponent } from './nanny-form.component';

describe('NannyFormComponent', () => {
  let component: NannyFormComponent;
  let fixture: ComponentFixture<NannyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NannyFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NannyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
