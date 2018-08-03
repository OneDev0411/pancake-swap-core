const { ether } = require('../../helpers/ether');
const { shouldBehaveLikeMintableToken } = require('./MintableToken.behavior');
const { shouldBehaveLikeCappedToken } = require('./CappedToken.behavior');

const CappedToken = artifacts.require('CappedToken');

contract('Capped', function ([_, owner, ...otherAccounts]) {
  const cap = ether(1000);

  beforeEach(async function () {
    this.token = await CappedToken.new(cap, { from: owner });
  });

  shouldBehaveLikeCappedToken(owner, otherAccounts, cap);
  shouldBehaveLikeMintableToken(owner, owner, otherAccounts);
});
