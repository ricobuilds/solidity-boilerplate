const { assert } = require('console');

// importing fakeToken
const fakeToken = artifacts.require("fakeToken");

// testing example
require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('decentralBank', (accounts) => {
  describe('Mock tether deployment', async () => {
    it('matches name succesfully', async () => {
      let _fakeToken = await fakeToken.new();
      const name = _fakeToken.name;
      assert.equal(name, 'fakeToken');
    })
  })
  })