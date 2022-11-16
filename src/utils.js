export function createRandomGroups(users, personsInGroup){
    const usersCopy = [...users] //clone
    const totalGroups = Math.floor(users.length / personsInGroup)
    const groups = [] 
    for(let i=0;i<totalGroups;i++){
        const  group = []
        for(let j=0; j<personsInGroup;j++){
            const randomoIndex = Math.floor(Math.random() * usersCopy.length)
            const randomUser = usersCopy[randomoIndex]
            group.push(randomUser)
            usersCopy.splice(randomoIndex, 1)

        }
        groups.push(group)
    }
    return {
        inGroups: groups,
        noGroups: usersCopy
    }
}


/*
['ana', 'juana', 'ivana', 'juliana', 'mariana'] 2 personas por grupo
{
    ingROUPS: [
        [XXXX],
        [XXXX],
    ]
    noGroups: [xxx]
}*/