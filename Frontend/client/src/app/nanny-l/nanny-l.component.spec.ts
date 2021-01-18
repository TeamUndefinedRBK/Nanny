import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannyLComponent } from './nanny-l.component';

describe('NannyLComponent', () => {
  let component: NannyLComponent;
  let fixture: ComponentFixture<NannyLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NannyLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NannyLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
