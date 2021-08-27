import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilmes } from '../models/iFilmes.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  titulo= "Filmes App";
  listavideos: IFilmes[]=[
    {
      nome: 'A Culpa é das Estrelas (2014)',
      lancamento:'05/06/2014 (BR)',
      duracao:'2h 12m',
      classificacao:76,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nEbSB6eCozhIZZORPAlNQLDDPDG.jpg',
      generos:['Romance', 'Drama'],
      pagina:'/culpa-das-estrelas'
    },
    {
      nome: 'Sol da Meia-noite (2018)',
      lancamento:'14/06/2018 (BR)',
      duracao:'1h 31m',
      classificacao:76,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1x8tN7XMxWgnJQnjZRxwMeiEWtF.jpg',
      generos:['romance', 'drama'],
      pagina:'/sol-meia-noite'
    },
    {
      nome: 'A cabana',
      lancamento:'06/04/2017 (BR)',
      duracao:'2h 12m',
      classificacao:74,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yf2WNfO1b0E1IcJDLUiGj7ccKRm.jpg',
      generos:['Drama', 'Fantasia'],
      pagina:'/a-cabana'
    },

    {
      nome: 'Crepusculo(2008)',
      lancamento:'19/12/2008 (BR)',
      duracao:'2h 2m',
      classificacao:63,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sgxHeCZE3H9n5jQFumQPs9HBnTV.jpg',
      generos:['Fantasia', 'Drama', 'Romance'],
      pagina:'/crepusculo'
    },

    {
      nome: 'A cinco passos de você',
      lancamento:'21/03/2019 (BR)',
      duracao:'1h 56m',
      classificacao:84,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uwyySfv4kybDpVebZhyb0Bnk3dz.jpg',
      generos:['Romance', 'Drama'],
      pagina:'/cinco-passos'
    },
  ];

  constructor(
    public alertController: AlertController, 
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) {}


    exibirFilme(filme: IFilmes){
      this.dadosService.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      
      header: 'Alerta!',
      message: 'Deseja favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.presentToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado as favoritos!!',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }
}
