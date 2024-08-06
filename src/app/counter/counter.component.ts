import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})

export class CounterComponent implements OnInit{

  counter:number = 0;

  ngOnInit(): void {
    this.counter = parseInt(localStorage.getItem("counter")!)  || 0;
    console.log("creando componente");
  }


  setCounter():void {
    this.counter = this.counter + 1;
    localStorage.setItem('counter', this.counter.toString());

  }

}
