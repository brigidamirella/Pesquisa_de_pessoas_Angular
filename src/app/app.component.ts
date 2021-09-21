import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Marcelo';
  
  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    //math.round pra arrendondar//
    const numero = Math.round(Math.random() * 100);
    this.nome = 'Patricia' + numero;
  }
  alterarNome(event: any) {
    //console.log(event)
    this.nome = event.target.value;
  }
}
