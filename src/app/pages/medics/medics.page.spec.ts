import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicsPage } from './medics.page';

describe('MedicsPage', () => {
  let component: MedicsPage;
  let fixture: ComponentFixture<MedicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
