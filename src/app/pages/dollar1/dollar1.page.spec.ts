import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dollar1Page } from './dollar1.page';

describe('Dollar1Page', () => {
  let component: Dollar1Page;
  let fixture: ComponentFixture<Dollar1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dollar1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dollar1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
