import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DollarPage } from './dollar.page';

describe('DollarPage', () => {
  let component: DollarPage;
  let fixture: ComponentFixture<DollarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DollarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
