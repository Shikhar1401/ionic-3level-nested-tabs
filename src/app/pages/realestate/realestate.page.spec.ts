import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealestatePage } from './realestate.page';

describe('RealestatePage', () => {
  let component: RealestatePage;
  let fixture: ComponentFixture<RealestatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealestatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealestatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
