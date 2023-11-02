import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssociateComponent } from './edit-associate.component';

describe('EditAssociateComponent', () => {
  let component: EditAssociateComponent;
  let fixture: ComponentFixture<EditAssociateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAssociateComponent]
    });
    fixture = TestBed.createComponent(EditAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
