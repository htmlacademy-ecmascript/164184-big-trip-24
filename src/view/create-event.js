//import { createElement } from '../render';
import { EVENTTYPEITEM } from '../constants';

export default function createEventItemsMarkup() {
  const eventTypeItemsMarkup = EVENTTYPEITEM.map((eventType) => `
      <div class="event__type-item">
        <input id="event-type-${eventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType}">
        <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-1">${capitalizeFirstLetter(eventType)}</label>
      </div>`).join(''); // .join('') соединяет все элементы массива в одну строку

  return `<div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${eventTypeItemsMarkup}
            </fieldset>
          </div>`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// export default class createEvent {
//   getTemplate() {
//     return createEventItemsMarkup();
//   }

//   getElement() {
//     if (!this.element) {
//       this.element = createElement(this.getTemplate());
//     }
//     return this.element;
//   }

//   removeElement() {
//     this.element = null;
//   }
// }
