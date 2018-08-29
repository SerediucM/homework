import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../modal';
@Component({
  selector: 'app-make-bookings',
  templateUrl: './make-bookings.component.html',
  styleUrls: ['./make-bookings.component.css']
})
export class MakeBookingsComponent implements OnInit {

  constructor(private modalService: ModalService) { }
  ngOnInit() {
  }

 openModal(id: string) {
        this.modalService.open(id);
    }

  closeModal(id: string) {
        this.modalService.close(id);
    }

}
