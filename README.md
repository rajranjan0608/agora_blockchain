We are having 3 smart contracts viz. **MainContract**, **User** and **Election**.
----------

### **Election Contract**

1. `creator (address)`
2. electionName (string)
3. electionDescription (string)
4. algorithm (enum)
5. `candidates (struct(id, name, voteCount))`
5. isOpen (boolean)
6. sdate (string)
7. edate (string)
8. `voters (mapping(address => boolean))`
9. results (winners[string])

### **User Contract**

1. userInfo
2. elections (mapping(userid => [electionContract]))
3. userPublicAddress

### **Main Contract**

1. userContracts (mapping(userPublicAddress => address))

--------

### **Application flow**

> **Public address of the users will be considered as their userID.**

* User creation
```
signup -> MainContract.createUser() -> new UserContract()
```
* Creating new election
```
UserContract.createElection(info) => new Election()
```
* One to Many relationship
```
MC -> user1, user2, user3, ....
user -> Election1, Election2, ....
```
----------

### **Build and Tests**

Use the below command to build (compile) the smart contracts
```bash
npm run build
```
Use the below command to run tests on the compiled smart contracts
```bash
npm run test
```
All of the test should pass
