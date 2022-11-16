import { createRandomGroups } from './src/utils'
import './style.css'



document.getElementById('group').addEventListener('click',handleGroup)

function handleGroup(){

    const persons=['ana', 'juana', 'ivana', 'juliana', 'mariana']
    const data = createRandomGroups(persons, 2)
    //const inGroups =data.inGroups
    //const noGroups = data.noGroups
    const{inGroups, noGroups} = data
    console.log(inGroups, noGroups)
    let msg = ''
    inGroups.forEach((group,i) => msg += `Grupo ${i}: ${group.join(', ')}  <br/>` )
    msg += 'No están en grupo: '+noGroups.join(',')
    document.getElementById('finalGroups').innerHTML=msg
    

   

}
