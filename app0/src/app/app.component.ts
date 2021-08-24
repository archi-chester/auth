import {Component, OnInit} from '@angular/core';
import { AppsPortal } from "@rproenza/micro-frontend-events-portal";
import {NotificationStrategy} from "../../../micro-frontend-events-portal/src";

@Component({
  selector: 'app0-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app0';
  appsPortal: AppsPortal

  ngOnInit() {
    // this.appsPortal = new AppsPortal();
    //
    // const appAName = "APP_A";
    // const appBName = "APP_B";
    //
    // const registrationObjectAppA = {
    //   feedbackType: NotificationStrategy.REDUX,
    //   callBack: () => {},
    //   appName: appAName,
    // }
    //
    // const registrationObjectAppB = {
    //   feedbackType: NotificationStrategy.REDUX,
    //   callBack: () => {},
    //   appName: appBName,
    // }
    //
    // // Register app into the portals controller
    // const appAEventPortal = this.appsPortal.registerApp(registrationObjectAppA);
    //
    // // Subscribe app to events of interest
    // appAEventPortal
    //   .listenEvent('EVENT_APP_B-ADDED-Bss') // => appAEventPortal is now listening for 'EVENT_APP_B-ADDED-Bss' events
    //   .listenEvent('EVENT_APP_B-DELETED-Bss'); // => appAEventPortal is now listening for 'EVENT_APP_B-DELETED-Bss' events
    //
    // // Register app into the portals controller
    // const appBEventPortal = this.appsPortal.registerApp(registrationObjectAppB);
    // // Subscribe app to events of interest
    // appBEventPortal
    //   .listenEvent('EVENT_APP_A-ADDED-Ass') // => appBEventPortal is now listening for 'EVENT_APP_A-ADDED-Ass' events
    //   .listenEvent('EVENT_APP_A-DELETED-Ass'); // => appBEventPortal is now listening for 'EVENT_APP_A-DELETED-Ass' events


    // // Publishing apps events
    // appAEventPortal.notifyEvent('EVENT_APP_A-ADDED-Ass', {
    //   eventPayload: "EVENT_APP_A-ADDED-Ass"
    // }); // => appBEventPortal is notified about the 'EVENT_APP_A-ADDED-Ass' event
    // appBEventPortal.notifyEvent('EVENT_APP_B-DELETED-Bss', {
    //   eventPayload: "EVENT_APP_B-DELETED-Bss"
    // }); // => appAEventPortal is notified about the 'EVENT_APP_B-DELETED-Bss event
    //
    // const appANotifiedLogs = this.appsPortal.logs.getAppNotifiedEvents(appAName);
    // console.log(appANotifiedLogs)
    //
    // const appBPublishedLogs = this.appsPortal.logs.getAppPublishedEvents(appBName);
    // console.log(appBPublishedLogs)

  }
}
