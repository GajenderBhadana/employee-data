import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplayeeListComponent } from './emplayee-list.component';

describe('EmplayeeListComponent', () => {
  let component: EmplayeeListComponent;
  let fixture: ComponentFixture<EmplayeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplayeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplayeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
