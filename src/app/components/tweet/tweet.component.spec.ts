import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeetComponent } from './tweet.component';

describe('TeetComponent', () => {
  let component: TeetComponent;
  let fixture: ComponentFixture<TeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
