import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHackathonComponent } from './view-hackathon.component';

describe('ViewHackathonComponent', () => {
  let component: ViewHackathonComponent;
  let fixture: ComponentFixture<ViewHackathonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewHackathonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewHackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
