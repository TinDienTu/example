/**
 * Profile.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    userid:{
      model: 'user'
    },
    firstname: {
      type: 'string'
    },
    lastname: {
      type: 'string'
    },
    gender: {
      type : 'string'
    },
    dob: {
      type: 'string'
      //columnType: 'date'

    },
    address: {
      type: 'text'
    }

  }

};

