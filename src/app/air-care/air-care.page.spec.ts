import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AirCarePage } from './air-care.page';

describe('AirCarePage', () => {
  let component: AirCarePage;
  let fixture: ComponentFixture<AirCarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirCarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AirCarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
