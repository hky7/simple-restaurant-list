import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onButtonGroupClick(event) {
    const clickedElement = event.target || event.srcElement;

    if (clickedElement.nodeName === 'A' ) {
      const isCertainButtonAlreadyActive = clickedElement.parentElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }

      clickedElement.className += ' active';
    }
  }
}
