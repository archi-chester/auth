import {Component, HostListener} from '@angular/core';
import {assetUrl} from '../single-spa/asset-url';
import {NgxIndexedDBService} from "ngx-indexed-db";

@Component({
  selector: 'app3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app3';
  public savedField = ""
  ninjaUrl = assetUrl('ninja.jpeg');
  message = ""
  public persons = []

  constructor(private dbService: NgxIndexedDBService) {

  }

  ngOnInit() {
    this.savedField = localStorage.getItem('data')

    this.dbService.getAll('people').subscribe((people) => {
      people.forEach(person => this.persons.push(person))
      console.log(people);
    });
  }

  @HostListener('window:message', ['$event'])
  onMessage(event) {
    console.log('Rcv: ', event.data)
    this.receiveMessage(event)
  }

  receiveMessage(event) {
    console.log('Receive message: ', event)
  }
}
