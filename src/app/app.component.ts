import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Histórico fictício como exemplo
  history = [
    { id: 1, data: '2023-11-01', moedaOrigem: 'USD', valorEntrada: 100, moedaDestino: 'EUR', valorSaida: 90, taxaConversao: 0.9 },
    { id: 2, data: '2023-11-02', moedaOrigem: 'EUR', valorEntrada: 50, moedaDestino: 'USD', valorSaida: 55, taxaConversao: 1.1 },
    // Adicione mais registros fictícios conforme necessário
  ];

  // Função para excluir histórico com base no ID
  excluirHistorico(id: number) {
    const index = this.history.findIndex(item => item.id === id);

    if (index !== -1) {
      this.history.splice(index, 1); // Remove o histórico do array
      console.log(`Histórico com ID ${id} excluído.`);
    } else {
      console.log(`Histórico com ID ${id} não encontrado.`);
    }
  }
}
