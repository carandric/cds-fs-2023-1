import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  name: string | undefined;

  ngOnInit(): void {
    this.prueba();
    console.log("My name is: " +this.name);
  }

  ngOnDestroy(): void {
    setTimeout(()=>{
      console.log("Hasta la vista, baby!");
    }, 3000);
  }

  prueba() {
    if (this.name=='') {
      this.name = "John Doe";
    } else {
      this.name = "Carlos Rico";
    }
  }

}
