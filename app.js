import inquirer from 'inquirer'

async function limit(say){
    const cavab= await fetch('https://catfact.ninja/breeds?limit='+say)
    const data=await cavab.json()
    console.log(data)
}


const prompt=inquirer.createPromptModule()
prompt([{
    message:'Sayini daxil edin',
    type:'input',
    name:'say'
}]).then(netice=>{
    limit(netice.say)
})