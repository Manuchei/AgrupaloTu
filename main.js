import { createRandomGroups } from './src/utils'
import './style.css'



document.getElementById('group').addEventListener('click',handleGroup)

function handleGroup(){
    let elements = document.getElementById('elements').value.split('\n')
    elements = elements.filter(e=>e!='')
    const groupsItems = parseInt(document.getElementById('groupsItems').value)
    const persons=['ana', 'juana', 'ivana', 'juliana', 'mariana']
    const data = createRandomGroups(persons, groupsItems)
    const{inGroups, noGroups} = data
    let msg = ''
    inGroups.forEach(
        (group,i) => (msg += `Grupo ${i}: ${group.join(', ')}  <br/>`)
         )
    if(noGroups)msg += 'No están en grupo: '+noGroups.join(',')
    document.getElementById('finalGroups').innerHTML=msg
    

   

}
