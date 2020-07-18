import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Insurance1Page } from './insurance1.page';

describe('Insurance1Page', () => {
  let component: Insurance1Page;
  let fixture: ComponentFixture<Insurance1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Insurance1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Insurance1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
