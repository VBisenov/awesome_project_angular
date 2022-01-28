import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = "hello world";
  spisok = ["MoLokO", "Hleeeeep", "Korm sobachiy", "Chocolate",
    "Tea", "Coffee", "Chicken ass", "Sheeeesh", "SaaaaaaaaaaS"];

  num: number = 1;

}
