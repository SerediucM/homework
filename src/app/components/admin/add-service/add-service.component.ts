import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  private Luni7: string;
  private Luni8: string;
  private Luni9: string;
  private Luni10: string;
  constructor() { }

  ngOnInit() {
  }
test(){
  console.log(" aici  "+ this.Luni7 +" aici2  "+ this.Luni8 )
}

}
