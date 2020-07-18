import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MutualfundPage } from './mutualfund.page';

describe('MutualfundPage', () => {
  let component: MutualfundPage;
  let fixture: ComponentFixture<MutualfundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualfundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MutualfundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
