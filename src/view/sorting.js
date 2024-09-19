import { createElement } from '../render';
import sortingPoint from './sorting-point';

function createSortingTemplate() {
  return `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortingPoint()}
    </form>`;
}

export default class Sorting {
  getTemplate() {
    return createSortingTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
