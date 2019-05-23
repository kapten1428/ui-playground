import { Component, OnInit, ElementRef, AfterViewChecked } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-va-interaction',
  templateUrl: './va-interaction.component.html',
  styleUrls: ['./va-interaction.component.scss']
})
export class VaInteractionComponent implements OnInit {

  constructor(
    private _elref: ElementRef
  ) { }

  ngOnInit() {
    // this.addItemEventListener();
  }

  selectItemPerCategory(event) {

    const itemName = event.target.name;    
    let _checkboxes = this._elref.nativeElement.querySelectorAll(`input[type="checkbox"]`);
    let _checkboxesChecked = this._elref.nativeElement.querySelectorAll(`input[type="checkbox"]:checked`);
    let _checkboxCheckedNumber =  _checkboxesChecked.length;
    let _foodCards = this._elref.nativeElement.querySelectorAll(`.food__card`);
    

    this.disableUncheckedItemCategory(itemName, _checkboxes, _checkboxCheckedNumber);
    this.addActivePercategoryClass(itemName, _foodCards, _checkboxCheckedNumber)

  }

  disableUncheckedItemCategory(itemName, element, checkedNumber) {
    element.forEach((el) => {
      if(checkedNumber > 0) {
        el.name === itemName ? el.disabled = false : el.disabled = true;
        return el.name === itemName ? true : el.checked = false;
      } else {
        return el.name === itemName ? true : el.disabled = false;
      }
    })
  }

  addActivePercategoryClass(itemName, element, checkedNumber) {
    // console.log(element);
    element.forEach((el) => {
      if(checkedNumber > 0) {
        if(el.firstChild.name === itemName) {
          el.classList.add('active');
        } else {
          el.classList.add('disabled');
        }
      } else {
        el.classList.remove('active');
        el.classList.remove('disabled');
      }
    });
  }
  
}
