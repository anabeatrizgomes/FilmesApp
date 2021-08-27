import { Component, OnInit } from '@angular/core';
import { IFilmes } from '../models/iFilmes.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme:IFilmes;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme=this.dadosService.pegarDados('filme');
    console.log('filme Enviado', this.filme);
  }

}
