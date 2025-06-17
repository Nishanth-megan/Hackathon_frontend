import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonHomeComponent } from './hackathon-home.component';

describe('HackathonHomeComponent', () => {
  let component: HackathonHomeComponent;
  let fixture: ComponentFixture<HackathonHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HackathonHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HackathonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
