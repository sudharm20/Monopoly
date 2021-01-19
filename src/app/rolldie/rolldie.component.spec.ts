import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolldieComponent } from './rolldie.component';

describe('RolldieComponent', () => {
  let component: RolldieComponent;
  let fixture: ComponentFixture<RolldieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolldieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolldieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
