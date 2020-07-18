import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mutualfund1Page } from './mutualfund1.page';

describe('Mutualfund1Page', () => {
  let component: Mutualfund1Page;
  let fixture: ComponentFixture<Mutualfund1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mutualfund1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mutualfund1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
