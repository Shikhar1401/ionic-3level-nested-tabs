import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Insurance2Page } from './insurance2.page';

describe('Insurance2Page', () => {
  let component: Insurance2Page;
  let fixture: ComponentFixture<Insurance2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Insurance2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Insurance2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
