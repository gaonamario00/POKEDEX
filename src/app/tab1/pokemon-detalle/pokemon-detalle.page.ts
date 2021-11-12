import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Tab1ServiceService } from '../tab1-service.service';

interface stat {
  "base_stat": 45,
  "effort": 0,
   stat: {
  "name": "hp",
  "url": "https://pokeapi.co/api/v2/stat/1/"
  }
}

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.page.html',
  styleUrls: ['./pokemon-detalle.page.scss'],
})
export class PokemonDetallePage implements OnInit {

  name: string;
  url: string;
  results: any;
  isLoading: boolean;
  shiny: boolean;
  stats: stat[];
  constructor(private actRoute: ActivatedRoute,
    private pokeinfo: Tab1ServiceService) { 
    this.name = this.actRoute.snapshot.paramMap.get('name');
  }

  ngOnInit() {

    this.isLoading = false;
    this.url = environment.urlPokeapi+"pokemon/"+this.name;
   // this.url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
    this.pokeinfo.getID(this.url).subscribe( (res: any)=>{
      this.results = res;
      console.log(this.results.abilities.length);
      //console.log(this.results.stats);
      //console.log(this.results.stats[0].stat.name);
      this.isLoading = true;
      this.stats = this.results.stats;
      //console.log(this.stats);
      setTimeout(()=>{
        let a = document.querySelectorAll("div[class='bar']");
        for(let i = 0; i<a.length ; i++)
        a[i].setAttribute("style","width: "+this.stats[i].base_stat+"%; background: #13c030");
      },100);
    });
  }

  showShiny(){
    this.shiny = !this.shiny;
  }


}
