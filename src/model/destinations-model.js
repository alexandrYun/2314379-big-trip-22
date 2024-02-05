export default class DestinationsModel {
  #service = null;
  #destinations = [];

  constructor(service) {
    this.#service = service
  }

  async init() {
    this.#destinations = await this.#service.destinations;
    return this.#destinations;
  }

  get() {
    return this.#destinations;
  }
}
