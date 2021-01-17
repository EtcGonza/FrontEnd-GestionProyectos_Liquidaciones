import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearModificarProyectoPage } from './crear-modificar-proyecto.page';

describe('CrearModificarProyectoPage', () => {
  let component: CrearModificarProyectoPage;
  let fixture: ComponentFixture<CrearModificarProyectoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearModificarProyectoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearModificarProyectoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
