import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  podsjetnici: string[] = [];
  podsjetnikText = '';
  ngOnInit() {
    const existingPodjsetnici = localStorage.getItem('podsjetnici');
    this.podsjetnici = JSON.parse(existingPodjsetnici as string) || [];
  }
  addPodsjetnik() {
    this.podsjetnici.push(this.podsjetnikText);
    localStorage.setItem('podsjetnici', JSON.stringify(this.podsjetnici));
  }
}