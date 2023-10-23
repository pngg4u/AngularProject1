import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeeDetailComponent } from './recipee-detail.component';

describe('RecipeeDetailComponent', () => {
  let component: RecipeeDetailComponent;
  let fixture: ComponentFixture<RecipeeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeeDetailComponent]
    });
    fixture = TestBed.createComponent(RecipeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
