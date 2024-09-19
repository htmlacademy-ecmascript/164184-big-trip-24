import { createElement } from '../render';
import filtersPoint from './filters-point';

function createFiltersTemplate() {
  return `<form class="trip-filters" action="#" method="get">
            ${filtersPoint()}

            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;
}

export default class Filter {
  getTemplate() {
    return createFiltersTemplate();
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
