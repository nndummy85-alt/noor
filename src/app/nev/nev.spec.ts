import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nev } from './nev';

describe('Nev', () => {
  let component: Nev;
  let fixture: ComponentFixture<Nev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nev],
    }).compileComponents();

    fixture = TestBed.createComponent(Nev);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
