import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHackathonComponent } from './add-hackathon.component';

describe('AddHackathonComponent', () => {
  let component: AddHackathonComponent;
  let fixture: ComponentFixture<AddHackathonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHackathonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
