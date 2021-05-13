import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geits',
  templateUrl: './geits.component.html',
  styleUrls: ['./geits.component.css']
})
export class GeitsComponent implements OnInit {

  tobe:string = "To be or not to be";
  imgpath:string = "/assets/images/Bill.jfif";
  biography:string = "Уи́льям Ге́нри Гейтс III (англ. William Henry Gates III; 28 октября 1955, Сиэтл[5], Вашингтон), более известный как Билл Гейтс (англ. Bill Gates)[6][7] — американский предприниматель и общественный деятель, филантроп, один из создателей (совместно с Полом Алленом) и бывший крупнейший акционер компании Microsoft. До июня 2008 года являлся руководителем компании; после ухода с поста остался в должности её неисполнительного председателя совета директоров. Также является сопредседателем благотворительного Фонда Билла и Мелинды Гейтс, членом совета директоров Berkshire Hathaway, генеральным директором Cascade investment.";
  constructor() { }

  ngOnInit(): void {
  }

}
