import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  hello:string = `Hello , Angular
  `;
  phrases:string[]=["If you think your teacher is tough, wait till you get a boss",
  "Life is not fair — get used to it!",
  "Success is a lousy teacher. It seduces smart people into thinking they can’t lose",
  "Be nice to nerds. Chances are you’ll end up working for one"]
  constructor() { }

  ngOnInit(): void {
  }

}
