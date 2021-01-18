import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannyInfoComponent } from './nanny-info.component';

describe('NannyInfoComponent', () => {
  let component: NannyInfoComponent;
  let fixture: ComponentFixture<NannyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NannyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NannyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
