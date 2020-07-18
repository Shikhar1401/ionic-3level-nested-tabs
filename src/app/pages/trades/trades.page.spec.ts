import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TradesPage } from './trades.page';

describe('TradesPage', () => {
  let component: TradesPage;
  let fixture: ComponentFixture<TradesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TradesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
