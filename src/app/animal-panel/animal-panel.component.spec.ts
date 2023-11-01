import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPanelComponent } from './animal-panel.component';

describe('AnimalPanelComponent', () => {
  let component: AnimalPanelComponent;
  let fixture: ComponentFixture<AnimalPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalPanelComponent]
    });
    fixture = TestBed.createComponent(AnimalPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
