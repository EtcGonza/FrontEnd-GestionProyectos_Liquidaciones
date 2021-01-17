import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionarProyectosPage } from './gestionar-proyectos.page';

describe('GestionarProyectosPage', () => {
  let component: GestionarProyectosPage;
  let fixture: ComponentFixture<GestionarProyectosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarProyectosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionarProyectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
