import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {pokemon } from './Pokemon.model';
import { Tab1ServiceService } from './tab1-service.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  url: string = environment.urlPokeapi+"pokemon?offset=0+&limit=50";
  public pokemon: pokemon[]=[];
  isLoading: boolean = false;
  oneClick: boolean = false;
  isPreviuos: boolean = false;
  isNext: boolean = true;
  page: number = 2;
  constructor(private pokeinfo: Tab1ServiceService) {}
  results: any = [];


   ngOnInit(){
    this.fetch();
  }


  next(){
    // if(this.results.previous==undefined) this.isPreviuos = false;
    // else this.isPreviuos = true;
    // if(this.results.next==undefined) this.isNext = false;
    // else this.isNext = true;    
    this.url = this.results.next
    this.oneClick = true;
    this.fetch();
  }

  previous(){
    // if(this.results.previous==undefined) this.isPreviuos = false;
    // else this.isPreviuos = true;
    // if(this.results.next==undefined) this.isNext = false;
    // else this.isNext = true;    
    this.url = this.results.previous;
    this.oneClick = true;
    this.fetch();
  }

  nextAndPrevius(){
   
  }

  fetch(){
    this.pokeinfo.getInfo(this.url).subscribe( (res:any)=>{
      console.log(res.results);
      this.results = res;

      this.isLoading = true;
      this.oneClick = false;
      if(this.results.previous==undefined) this.isPreviuos = false;
      else this.isPreviuos = true;
      if(this.results.next==undefined) this.isNext = false;
      else this.isNext = true;
    });
    console.log(this.results.next); 

  }
 

}
