import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class Galeria {
  fotoSelecionada: any = null; 

  // fotos = [
  //   { url: 'https://a0.muscache.com/im/pictures/miso/Hosting-663645857260189310/original/343f9a40-4778-4785-b0ae-6d3d8cfea2a8.jpeg?im_w=720', alt: 'Vista externa da pousada' },
  //   { url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1191291509800347153/original/e1f31d03-75db-4db7-a4fb-094d1580957d.jpeg', alt: 'Interior do quarto master' },
  //   { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/646362222.jpg?k=fa3f37ae7decd27eceab7bb05424be356780dbd672437c948fae73ccf7480d2c&o=', alt: 'Cachoeira próxima ao local' },
  //   { url: 'https://www.holmy.com.br/wp-content/uploads/2024/04/35497346-0c7b-4334-9dc7-cb76ca231c6a.jpeg.webp', alt: 'Café da manhã colonial' },
  //   { url: 'https://cdn.awsli.com.br/2500x2500/915/915934/produto/206627627/chal--moderno-airbnb-y12sjr3mv7.jpg', alt: 'Trilha de caminhada' },
  //   { url: 'https://snoopy.archdaily.com/images/archdaily/media/images/645b/e840/1424/c478/690c/4a76/slideshow/casas-brasileiras-10-cabanas-para-apreciar-a-natureza_23.jpg?1683744847&format=webp&width=640&height=580', alt: 'Pôr do sol no mirante' }
  // ];

  fotos = [
    { url: 'galeria/cabana-1.jpeg', alt: 'Vista externa da pousada' },
    { url: 'galeria/cabana-2.jpeg', alt: 'Interior do quarto master' },
    { url: 'galeria/cabana-3.jpeg', alt: 'Cachoeira próxima ao local' },
    { url: 'galeria/cascata-1.jpeg', alt: 'Café da manhã colonial' },
    { url: 'galeria/cascata-2.jpeg', alt: 'Trilha de caminhada' },
    { url: 'galeria/cascata-3.jpeg', alt: 'Pôr do sol no mirante' }
  ]

  abrirFoto(foto: any) {
    this.fotoSelecionada = foto;
  }

  fecharFoto() {
    this.fotoSelecionada = null;
  }
}
