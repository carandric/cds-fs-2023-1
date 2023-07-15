import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  constructor(private httpClient:HttpClient){}

  name: string | undefined | null;

  ngOnDestroy(): void {
    setTimeout(()=>{
      console.log("Hasta la vista, baby!");
    }, 3000);
  }

  ngOnInit(): void {
    // this.prueba(localStorage.getItem("message"));
    // console.log("My name is: " +this.name);

    let token = localStorage.getItem("token");
    let headers;

    if (token) {
      headers = new HttpHeaders()
        .set("Contect-Type", "application/json")
        .set("Accept", "application/json")
        .set("Authorization", `Bearer ${token}`)
    }

    const options = {headers: headers};

    // this.httpClient.post(
    //   "https://run.mocky.io/v3/a8c2acbd-9623-4f26-bbd5-9106f53a3851", //usuario
    //   options).subscribe({
    //     next: (response: any) => {
    //       // if (response.name=='') {
    //       //   this.name = "John Doe*";
    //       // } else {
    //       //   this.name = response.name;
    //       // }
    //       this.name = response.name;
    //     },
    //     error: (error) => console.log(error),
    //     complete: () => {
    //       console.log("complete ... usuario obtenido")
    //       // this.router.navigate(["/"]);
    //     }
    //   });

    this.httpClient.get(
        'http://localhost:3000/auth/', //usuario
        options).subscribe({
          next: (response: any) => {
            this.name = response.name;
          },
          error: (error) => console.log(error),
          complete: () => {
            console.log("complete ... usuario obtenido")
            // this.router.navigate(["/"]);
          }
        });

  }

  // prueba(name: string | undefined | null) {
  // }

}
