import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-narrow-animation',
  templateUrl: './narrow-animation.component.html',
  styleUrls: ['./narrow-animation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NarrowAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.onscroll();
  }

  onscroll() {
    window.addEventListener('scroll', () => {
      let scrollYPos = window.scrollY ||  document.documentElement.scrollLeft;
      if(scrollYPos > 200) {
        // document.getElementsByClassName('header')[0].style.position = 'sticky';
        // document.getElementById('letter__spark').classList.add('letter__trans');
      } else {
        // document.getElementsByClassName('header')[0].style.position = 'relative';
        // document.getElementById('letter__spark').classList.remove('letter__trans');
      }
    })
  }

}
