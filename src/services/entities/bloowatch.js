const axios = require('axios').default;

/**
 * Documentation :
 * http://www.bloowatch.org/developers/api
 */
export default class BloowatchService {
  bloowatchUrl = 'https://marta-space-api.herokuapp.com';
  bloowatchUrlImage = 'http://www.bloowatch.org';

  /**
   * The function allows to return all species in the Api.
   * @return {Promise<Species[]>}
   */
  async getAllSpecies() {
    try {
      const species = await axios.get(this.bloowatchUrl + '/api/species')
      return await this.getImageUrl(species.data.allSpecies);
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * The function allows to return a focused species by a url species.
   * @param name
   * @return {Promise<Species>}
   */
  async getSpeciesFocused(name) {
    try {
      const species = await axios.get(this.bloowatchUrl + `/api/species/${name}`)
      return await this.getImageUrl(species.data.species);
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * The function allows to catch a focused species and replace the url image
   * @param species
   * @return {*}
   */
  getImageUrl(species) {
    for (const select of species) {
      select.image.url = this.bloowatchUrlImage + select.image.url;
    }
    return species;
  }
}
