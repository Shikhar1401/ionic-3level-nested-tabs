import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicPage } from './medic.page';

describe('MedicPage', () => {
  let component: MedicPage;
  let fixture: ComponentFixture<MedicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
