Election Contract
  *1. creator (address)
  2. electionName (string)
  3. electionDescription (string)
  4. algorithm (enum)
  *5. candidates (struct(id, name, voteCount))
  6. isOpen (boolean)
  7. sdate (string)
  8. edate (string)
  *9. voters (mapping(address => boolean))
  10. results (winners[string])

User Contract
  1. userInfo
  2. elections (mapping(userid => [electionContract]))
  3. userPublicAddress

Main Contract
  1. userContracts (mapping(userPublicAddress => address))
  
  userID - publicAdd

signup -> MainContract.createUser() -> new UserContract()

UserContract.createElection(info) => new Election()

MC -> user1, user2, user3, ....

user -> Election1, Election2, ....

Commands - 
$ truffle develop

truffle (develop)>
Below commands are inside truffle develop console - 

$ migrate

**Creating new User**
```javascript
let main = await MainContract.deployed();
await main.address
let txReceipt = await main.createUser();
await main.Users(1);
```

**Creating new Election**
```javascript
let user = await User.at(await main.Users(1));
user.address
txReceipt = await user.createElection(["Test election", "This is a test election", "Oklahoma"], [1, 1000], ["Raj", "Ayush"]);
await user.Elections(1);
```
**Getting details of Election**
```javascript
let election = await Election.at(await user.Elections(1));
election.address
await election.name();
await election.description();
```
