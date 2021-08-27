import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CulpaDasEstrelasPage } from './culpa-das-estrelas.page';

describe('CulpaDasEstrelasPage', () => {
  let component: CulpaDasEstrelasPage;
  let fixture: ComponentFixture<CulpaDasEstrelasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CulpaDasEstrelasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CulpaDasEstrelasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
