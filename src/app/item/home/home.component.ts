import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  items: Item[]=[];

  constructor(private itemService:ItemService){}

  ngOnInit(): void {
    this.itemService.getAllItem().subscribe((data)=>{
      this.items=data;
    })
  }

  delete(id: Number){
    const isConfirmed=window.confirm("Tem certeza que deseja deletar este investimento?");
    if(isConfirmed){
      this.itemService.delete(id).subscribe((data)=>{
  
        this.items=this.items.filter(itm=>itm.id!==id);
      })
      window.alert("Investimento removido com sucesso!");
      window.location.reload();

    }
    
  }
}
