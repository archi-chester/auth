import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-iframe';
  message = 'Demo';
  port2: MessagePort;

  @HostListener('window:message', ['$event'])
  initPort(event) {
    this.port2 = event.ports[0];
    this.port2.onmessage = function (e) {
      const msg = String(e.data.data).trim()
      document.getElementById("iframeText").innerHTML = msg
      this.postMessage('Message received by IFrame: "' + msg + '"');
    }
  }
}
