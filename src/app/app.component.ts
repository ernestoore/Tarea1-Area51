import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible: boolean = true;
  titulo: string = 'Ingrese sus Credenciales';
  homeTitulo: string = 'Bienvenido - Ingresar a Login';

  login(){
    this.visible = !this.visible
  }

  cambiarVisibilidad(){
    this.visible = !this.visible;
  }
}
