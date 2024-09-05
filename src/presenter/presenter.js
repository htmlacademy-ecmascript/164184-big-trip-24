import Filter from '../view/filters.js';
import Sorting from '../view/sorting.js';
import List from '../view/list-route-points.js';
import NewPoint from '../view/new-point.js';
import EditPoint from '../view/edit-point.js';
import TripInfo from '../view/trip-info.js';
import { render, RenderPosition } from '../render.js';

const tripMain = document.querySelector('.trip-main');
const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');


export default function renderElements() {
  render(new TripInfo(), tripMain, RenderPosition.AFTERBEGIN);
  render(new Filter(), tripControlsFilters, RenderPosition.BEFOREEND);
  render(new Sorting(), tripEvents, RenderPosition.BEFOREEND);
  render(new EditPoint(), tripEvents, RenderPosition.BEFOREEND);
  render(new NewPoint(), tripEvents, RenderPosition.BEFOREEND);
  render(new List(), tripEvents, RenderPosition.BEFOREEND);
}

