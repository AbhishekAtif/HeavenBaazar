import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeedListComponent } from './weed-list.component';

describe('WeedListComponent', () => {
  let component: WeedListComponent;
  let fixture: ComponentFixture<WeedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
