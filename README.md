Election Contract
\*1. creator (address)

2. electionName (string)
3. electionDescription (string)
4. algorithm (enum)
   \*5. candidates (struct(id, name, voteCount))
5. isOpen (boolean)
6. sdate (string)
7. edate (string)
   \*9. voters (mapping(address => boolean))
8. results (winners[string])

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

**build and test**
`npm run build`

`npm run test`

All of the test should pass
