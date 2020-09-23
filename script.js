let colunas = document.getElementById('colunas').children; // id do tbody
let count = 0;

function addButton(){
    for(let i = 0; i < colunas.length;i++){
        colunas[i].addEventListener("click",(e) => {  
            play(e)
        })
    }
}
addButton()
 
function play(e){
    const playerOne = document.createElement('img')
    const playerTwo = document.createElement('img')
    playerOne.src = './img/first.png'
    playerTwo.src = './img/second.png'
    let columnTarget = e.target.closest("tr")
    let x = columnTarget.children.length
    
    for(let i = 0; i <  x ;i++){
        
        if(columnTarget.children[i].child === undefined){
           console.log(columnTarget.children[i].child)
            if(count % 2 === 0){
                columnTarget.children[i].appendChild(playerOne)  
                count+=1;
            }   
            if(count % 2 != 0){
                columnTarget.children[i].appendChild(playerTwo)
                count+=1;
                }
        }
        else {
            
        } 
        

    }
    
    
}







