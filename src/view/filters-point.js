import { FILTERSPOINT } from '../constants';

export default function filterPoint() {
  const filterPoints = FILTERSPOINT.map((eventType) => `<div class="trip-filters__filter">
              <input id="filter-${eventType}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${eventType}">
              <label class="trip-filters__filter-label" for="filter-${eventType}">${eventType}</label>
            </div>`).join('');

  return filterPoints;
}
