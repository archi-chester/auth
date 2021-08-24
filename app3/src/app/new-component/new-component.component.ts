import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app3-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponent implements OnInit {

  public message = "Запуск без параметров"

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParameter()
  }

  public getParameter() {
    //  получаем test
    const test = this.activatedRoute.snapshot.paramMap.get('id');
    if (test) {
      this.message = `Передан параметр ${test}`
    }

  }

}
