import { Component } from '@angular/core'
import { NavController, ModalController } from 'ionic-angular'
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Select dates',
      closeIcon: true,
      doneLabel: 'Save'
    }

    const datePicker = this.modalCtrl.create(CalendarModal, {
      options: options
    })

    datePicker.present()

    datePicker.onDidDismiss(date => {
      console.log(date)
    })
  }
}
