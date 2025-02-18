import { Component } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  item: Item = {
    id: 0,
    name: '',
    type: '',
    value: 0,
    date: new Date()
  };

  hoje: string = new Date().toISOString().split('T')[0]; // A data de hoje formatada como 'YYYY-MM-DD'

  constructor(private itemService: ItemService, private router: Router) {}

  // Método de validação (Adicionando as validações aqui também, caso queira realizar verificações extras)
  validateInputs(): boolean {
    // Validação do nome do investimento
    if (!this.item.name || this.item.name.trim().length < 3) {
      alert("O nome do investimento deve ter pelo menos 3 caracteres.");
      return false;
    }

    // Validação do tipo de investimento
    if (!this.item.type || this.item.type.trim().length === 0) {
      alert("O tipo do investimento é obrigatório.");
      return false;
    }

    // Validação do valor investido
    if (this.item.value <= 0) {
      alert("O valor investido deve ser maior que 0.");
      return false;
    }

    // Validação da data do investimento
    const hoje = new Date();
    const dataInvestimento = new Date(this.item.date);
    if (dataInvestimento > hoje) {
      alert("A data do investimento não pode estar no futuro.");
      return false;
    }

    return true;
  }

  // Método para criar o item
  create() {
    if (this.validateInputs()) {
      this.itemService.create(this.item).subscribe({
        next: (data) => {
          window.alert("Investimento cadastrado com sucesso!");
          this.router.navigate(['/item/home']);
        },
        error: (err) => {
          console.log(err);
          window.alert("Erro ao cadastrar investimento. Tente novamente.");
        }
      });
    }
  }

  // Método para cancelar a operação
  cancel() {
    this.router.navigate(["/item/home"]);
  }
}
