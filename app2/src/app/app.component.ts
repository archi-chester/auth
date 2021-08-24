import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {assetUrl} from '../single-spa/asset-url';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app2';
  ninjaUrl = assetUrl('ninja.jpeg');
  // db = null
  // tx = null
  store = null
  objectStore = null
  channel: MessageChannel
  port1: MessagePort
  iframe: Element
  returnMessage = ""

  private _dbPromise;

  ngOnInit() {
  }

  public addData() {
    console.log("Add data to Store")
    this.store.put({data: "Data"})
  }

  public initIFrame(port1: MessagePort) {
    port1.onmessage = e => {
      console.log("port1.onmessage: ", e)
      const output = document.getElementById("outputText")
      output.innerText = String(e.data)
    }
    // @ts-ignore
    this.iframe.contentWindow.postMessage('init', '*', [this.channel.port2]);
  }

  public sendMessageToNavbar(event: HTMLInputElement) {
    const message = String(event.value).trim()

    setTimeout(() => {
      window.postMessage({data: message, target: 'navbar'}, "*")
    }, 3000)
  }

  public sendMessageToIFrame(message: string) {

    this.port1.postMessage({data: String(message).trim(), target: 'iframe'})


  }
}
