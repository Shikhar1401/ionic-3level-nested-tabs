import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Realestate1Page } from './realestate1.page';

describe('Realestate1Page', () => {
  let component: Realestate1Page;
  let fixture: ComponentFixture<Realestate1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Realestate1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Realestate1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
