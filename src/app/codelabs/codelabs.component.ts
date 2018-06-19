import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-codelabs',
  templateUrl: './codelabs.component.html',
  styleUrls: ['./codelabs.component.css']
})
export class CodelabsComponent implements OnInit {

  private codelabs: Array<any> = [];

  constructor(private ts: TutorialService) {
    this.ts.getCodelabs().subscribe((response:any) => {
      this.codelabs = response.codelabs;
    });
  }

  ngOnInit() {
  }
}
