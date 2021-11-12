import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor() {}

  ngOnInit()
{
  setInterval(this.hola,3000);
}

hola(){
  const a = document.querySelector("div[class='bar']");
  a.setAttribute("style","width: 90%; background: #13c030");
}

}
