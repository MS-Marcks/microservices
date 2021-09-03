import { Component, OnInit } from '@angular/core';
import { Micro2Service } from 'src/app/service/micro2/micro2.service';

@Component({
  selector: 'app-micro2',
  templateUrl: './micro2.component.html',
  styleUrls: ['./micro2.component.css']
})
export class Micro2Component implements OnInit {

  data: any;
  constructor(
    private micro2: Micro2Service
  ) { }

  ngOnInit(): void {
    this.micro2.GetData().subscribe(
      (res) => {
        this.data = res;
      }, (err) => {
        console.log(err);
      }
    )
  }

}
