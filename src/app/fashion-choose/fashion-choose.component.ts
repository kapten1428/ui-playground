import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-fashion-choose',
  templateUrl: './fashion-choose.component.html',
  styleUrls: ['./fashion-choose.component.scss']
})
export class FashionChooseComponent implements OnInit {

  constructor(
    private _elref: ElementRef
  ) { }

  ngOnInit() {
  }

  selectedFashionItem(itemName) {
    console.log(itemName);
    let fashionItems = this. _elref.nativeElement.querySelectorAll(`input[type="checkbox"]`);

    fashionItems.forEach((item) => {
      return item.name === itemName ? true : item.checked = false;
    })
  }

}
