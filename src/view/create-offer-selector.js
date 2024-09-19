import { OFFERDATА } from '../constants';

export default function createOfferSelector() {
  return OFFERDATА.map((event) => `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
      <label class="event__offer-label" for="event-offer-luggage-1">
        <span class="event__offer-title">${event.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${event.price}</span>
      </label>
    </div>
  `).join('');
}
