import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DerivativesPage } from './derivatives.page';

describe('DerivativesPage', () => {
  let component: DerivativesPage;
  let fixture: ComponentFixture<DerivativesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerivativesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DerivativesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
