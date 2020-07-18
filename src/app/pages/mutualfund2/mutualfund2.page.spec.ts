import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mutualfund2Page } from './mutualfund2.page';

describe('Mutualfund2Page', () => {
  let component: Mutualfund2Page;
  let fixture: ComponentFixture<Mutualfund2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mutualfund2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mutualfund2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
