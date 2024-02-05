import AbstractView from '../framework/view/abstract-view.js';

const createLoaderTemplate = () =>
  '<p class="trip-events__msg">Loading...</p>';

export default class Loader extends AbstractView {
  get template () {
    return createLoaderTemplate();
  }
}