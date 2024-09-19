import { SORTINGPOINTS } from '../constants';
import { DISABLEDSORTINGPOINTS } from '../constants';

export default function sortingPoint() {
  const sortingPoints = SORTINGPOINTS.map((eventType) => {
    const isDisabled = DISABLEDSORTINGPOINTS.includes(eventType) ? 'disabled' : '';
    return `<div class="trip-sort__item  trip-sort__item--${eventType}">
      <input id="sort-${eventType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${eventType}" ${isDisabled}>
      <label class="trip-sort__btn" for="sort-${eventType}">${eventType}</label>
    </div>`;
  }).join('');

  return sortingPoints;
}
