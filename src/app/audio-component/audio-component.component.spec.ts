import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioComponentComponent } from './audio-component.component';

describe('AudioComponentComponent', () => {
  let component: AudioComponentComponent;
  let fixture: ComponentFixture<AudioComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
