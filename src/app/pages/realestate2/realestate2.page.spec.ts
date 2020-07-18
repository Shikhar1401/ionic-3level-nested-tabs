import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Realestate2Page } from './realestate2.page';

describe('Realestate2Page', () => {
  let component: Realestate2Page;
  let fixture: ComponentFixture<Realestate2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Realestate2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Realestate2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
