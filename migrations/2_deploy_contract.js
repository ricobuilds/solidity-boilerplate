const _fakeToken = artifacts.require("fakeToken");

module.exports = async function (deployer) {
  
  await deployer.deploy(_fakeToken);
  const fakeToken = await _fakeToken.deployed();
};
