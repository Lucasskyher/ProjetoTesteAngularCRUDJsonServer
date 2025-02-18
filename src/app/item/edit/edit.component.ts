import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  item: Item = {
    id: 0,
    name: '',
    type: '',
    value: 0,
    date: new Date()
  };

  hoje: string = new Date().toISOString().split('T')[0]; // Data de hoje formatada

  constructor(private itemService: ItemService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.itemService.getById(id).subscribe((data) => {
      this.item = data;
    });
  }

  // Função de validação
  validateInputs(): boolean {
    if (!this.item.name || this.item.name.length < 3) {
      alert("O nome do investimento deve ter pelo menos 3 caracteres.");
      return false;
    }

    if (!this.item.type) {
      alert("O tipo do investimento é obrigatório.");
      return false;
    }

    if (this.item.value <= 0) {
      alert("O valor investido deve ser maior que 0.");
      return false;
    }

    const hoje = new Date();
    const dataInvestimento = new Date(this.item.date);
    if (dataInvestimento > hoje) {
      alert("A data do investimento não pode estar no futuro.");
      return false;
    }

    return true;
  }

  // Método para cancelar a edição
  cancel() {
    this.router.navigate(["/item/home"]);
  }

  // Método para atualizar o item
  update() {
    if (this.validateInputs()) {
      this.itemService.update(this.item).subscribe({
        next: (data) => {
          window.alert("Investimento atualizado com sucesso!");
          this.router.navigate(["/item/home"]);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}

