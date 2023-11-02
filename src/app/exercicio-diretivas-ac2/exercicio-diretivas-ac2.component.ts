import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas-ac2',
  templateUrl: './exercicio-diretivas-ac2.component.html',
  styleUrls: ['./exercicio-diretivas-ac2.component.css']
})
export class ExercicioDiretivasAC2Component {

missao1 : missao = new missao("Pular")
missao2 : missao = new missao("Correr")
missao3 : missao = new missao("Agachar")
missao4 : missao = new missao("Deslizar")
missao5 : missao = new missao("Especial")

missoes:Array<missao> = [this.missao1, this.missao2, this.missao3, this.missao4, this.missao5]

mudaStatus(missao : missao){
  missao.concluido = true
}

  }
  class missao{
    descricao : string = ""
    concluido : boolean = false

    constructor (descricao : string){
      this.descricao = descricao
    }

  }

