(()=>{"use strict";const e="beforeend";function t(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function n(t,n,s=e){n.insertAdjacentElement(s,t.getElement())}const s=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],i=[{title:"Add luggage",price:50},{title:"Switch to comfort",price:80},{title:"Add meal",price:15},{title:"Choose seats",price:5},{title:"Travel by train",price:40}],l=["day","event","time","price","offers"],a=["event","offers"],v=["everything","future","present","past"];class p{getTemplate(){return`<form class="trip-filters" action="#" method="get">\n            ${v.map((e=>`<div class="trip-filters__filter">\n              <input id="filter-${e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e}">\n              <label class="trip-filters__filter-label" for="filter-${e}">${e}</label>\n            </div>`)).join("")}\n\n            <button class="visually-hidden" type="submit">Accept filter</button>\n          </form>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class o{getTemplate(){return`\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      ${l.map((e=>`<div class="trip-sort__item  trip-sort__item--${e}">\n      <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}" ${a.includes(e)?"disabled":""}>\n      <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n    </div>`)).join("")}\n    </form>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class _{getTemplate(){return'<ul class="trip-events__list">\n            <li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime="2019-03-18">MAR 18</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">Taxi Amsterdam</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n                  </p>\n                  <p class="event__duration">30M</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">20</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                  <li class="event__offer">\n                    <span class="event__offer-title">Order Uber</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">20</span>\n                  </li>\n                </ul>\n                <button class="event__favorite-btn event__favorite-btn--active" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>\n            <li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime="2019-03-18">MAR 18</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">Flight Chamonix</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="2019-03-18T12:25">12:25</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="2019-03-18T13:35">13:35</time>\n                  </p>\n                  <p class="event__duration">01H 10M</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">160</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                  <li class="event__offer">\n                    <span class="event__offer-title">Add luggage</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">50</span>\n                  </li>\n                  <li class="event__offer">\n                    <span class="event__offer-title">Switch to comfort</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">80</span>\n                  </li>\n                </ul>\n                <button class="event__favorite-btn" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>\n            <li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime="2019-03-18">MAR 18</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">Drive Chamonix</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="2019-03-18T14:30">14:30</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="2019-03-18T16:05">16:05</time>\n                  </p>\n                  <p class="event__duration">01H 35M</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">160</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                  <li class="event__offer">\n                    <span class="event__offer-title">Rent a car</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">200</span>\n                  </li>\n                </ul>\n                <button class="event__favorite-btn  event__favorite-btn--active" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>\n          </ul>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class c{getTemplate(){return'<form class="event event--edit" action="#" method="post">\n            <header class="event__header">\n              <div class="event__type-wrapper">\n                <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                  <span class="visually-hidden">Choose event type</span>\n                  <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n                </label>\n                <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n                <div class="event__type-list">\n                  <fieldset class="event__type-group">\n                    <legend class="visually-hidden">Event type</legend>\n\n                    <div class="event__type-item">\n                      <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                      <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                      <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                      <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                      <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                      <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                      <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                      <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                      <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                      <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                    </div>\n                  </fieldset>\n                </div>\n              </div>\n\n              <div class="event__field-group  event__field-group--destination">\n                <label class="event__label  event__type-output" for="event-destination-1">\n                  Flight\n                </label>\n                <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n                <datalist id="destination-list-1">\n                  <option value="Amsterdam"></option>\n                  <option value="Geneva"></option>\n                  <option value="Chamonix"></option>\n                </datalist>\n              </div>\n\n              <div class="event__field-group  event__field-group--time">\n                <label class="visually-hidden" for="event-start-time-1">From</label>\n                <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n                &mdash;\n                <label class="visually-hidden" for="event-end-time-1">To</label>\n                <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n              </div>\n\n              <div class="event__field-group  event__field-group--price">\n                <label class="event__label" for="event-price-1">\n                  <span class="visually-hidden">Price</span>\n                  &euro;\n                </label>\n                <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n              </div>\n\n              <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n              <button class="event__reset-btn" type="reset">Cancel</button>\n            </header>\n            <section class="event__details">\n              <section class="event__section  event__section--offers">\n                <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                <div class="event__available-offers">\n                  <div class="event__offer-selector">\n                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n                    <label class="event__offer-label" for="event-offer-luggage-1">\n                      <span class="event__offer-title">Add luggage</span>\n                      &plus;&euro;&nbsp;\n                      <span class="event__offer-price">30</span>\n                    </label>\n                  </div>\n\n                  <div class="event__offer-selector">\n                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n                    <label class="event__offer-label" for="event-offer-comfort-1">\n                      <span class="event__offer-title">Switch to comfort class</span>\n                      &plus;&euro;&nbsp;\n                      <span class="event__offer-price">100</span>\n                    </label>\n                  </div>\n\n                  <div class="event__offer-selector">\n                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n                    <label class="event__offer-label" for="event-offer-meal-1">\n                      <span class="event__offer-title">Add meal</span>\n                      &plus;&euro;&nbsp;\n                      <span class="event__offer-price">15</span>\n                    </label>\n                  </div>\n\n                  <div class="event__offer-selector">\n                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n                    <label class="event__offer-label" for="event-offer-seats-1">\n                      <span class="event__offer-title">Choose seats</span>\n                      &plus;&euro;&nbsp;\n                      <span class="event__offer-price">5</span>\n                    </label>\n                  </div>\n\n                  <div class="event__offer-selector">\n                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n                    <label class="event__offer-label" for="event-offer-train-1">\n                      <span class="event__offer-title">Travel by train</span>\n                      &plus;&euro;&nbsp;\n                      <span class="event__offer-price">40</span>\n                    </label>\n                  </div>\n                </div>\n              </section>\n\n              <section class="event__section  event__section--destination">\n                <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n\n                <div class="event__photos-container">\n                  <div class="event__photos-tape">\n                    <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n                    <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n                    <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n                    <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n                    <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n                  </div>\n                </div>\n              </section>\n            </section>\n          </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class r{getTemplate(){return`<form class="event event--edit" action="#" method="post">\n            <header class="event__header">\n              <div class="event__type-wrapper">\n                <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                  <span class="visually-hidden">Choose event type</span>\n                  <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n                </label>\n                <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n                <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n              ${s.map((e=>{return`\n      <div class="event__type-item">\n        <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n        <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${t=e,t.charAt(0).toUpperCase()+t.slice(1)}</label>\n      </div>`;var t})).join("")}\n            </fieldset>\n          </div>\n              </div>\n\n              <div class="event__field-group  event__field-group--destination">\n                <label class="event__label  event__type-output" for="event-destination-1">\n                  Flight\n                </label>\n                <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">\n                <datalist id="destination-list-1">\n                  <option value="Amsterdam"></option>\n                  <option value="Geneva"></option>\n                  <option value="Chamonix"></option>\n                </datalist>\n              </div>\n\n              <div class="event__field-group  event__field-group--time">\n                <label class="visually-hidden" for="event-start-time-1">From</label>\n                <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n                &mdash;\n                <label class="visually-hidden" for="event-end-time-1">To</label>\n                <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n              </div>\n\n              <div class="event__field-group  event__field-group--price">\n                <label class="event__label" for="event-price-1">\n                  <span class="visually-hidden">Price</span>\n                  &euro;\n                </label>\n                <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">\n              </div>\n\n              <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n              <button class="event__reset-btn" type="reset">Delete</button>\n              <button class="event__rollup-btn" type="button">\n                <span class="visually-hidden">Open event</span>\n              </button>\n            </header>\n            <section class="event__details">\n              <section class="event__section  event__section--offers">\n                <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                <div class="event__available-offers">\n                  ${i.map((e=>`\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n      <label class="event__offer-label" for="event-offer-luggage-1">\n        <span class="event__offer-title">${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </label>\n    </div>\n  `)).join("")}\n                </div>\n              </section>\n\n              <section class="event__section  event__section--destination">\n                <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>\n              </section>\n            </section>\n          </form>`}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class d{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n            <div class="trip-info__main">\n              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n              <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n            </div>\n\n            <p class="trip-info__cost">\n              Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n            </p>\n          </section>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const u=document.querySelector(".trip-main"),f=document.querySelector(".trip-controls__filters"),m=document.querySelector(".trip-events");(new class{init(){n(new d,u,"afterbegin"),n(new p,f,e),n(new o,m,e),n(new r,m,e),n(new c,m,e),n(new _,m,e)}}).init()})();
//# sourceMappingURL=bundle.85cd6f4b6bd8d2560b91.js.map