var mainContract = artifacts.require("MainContract");
// import "User";
var User = artifacts.require("User");
contract("userContract", function (accounts) {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const nda = ["Ayush", "Test election", "demo_algo"];
  const se = ["1234", "5678"];
  const candidates = [accounts[3], accounts[4], accounts[5]];
  let deployedMainContract;

  beforeEach(async () => {
    deployedMainContract = await mainContract.deployed();
    await deployedMainContract.createUser({ from: user1 });
  });

  it("should create new election", async () => {
    const createdUser1 = await deployedMainContract.Users.call(1);
    let res = await User.at(createdUser1);
    const election = await res.createElection(nda, se, candidates, {
      from: user1,
    });
    //console.log(election.logs[0].args[0]);
    assert.equal(election.logs[0].event, "electionCreated");
  });

  it("should not create new election from unauthorized user", async () => {
    const createdUser1 = await deployedMainContract.Users.call(1);
    const res = await User.at(createdUser1);
    try {
      await res.createElection(nda, se, candidates, { from: user2 });
    } catch (e) {
      assert.equal(e.reason, "Can't create election using other's contract");
    }
  });
});
