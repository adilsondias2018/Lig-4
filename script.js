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
   
    for(let i = 0; i < columnTarget.children.length  ;i++){
        
        if(columnTarget.children[i].children.length === 0){
            if(count % 2 === 0){
                count++;
                return columnTarget.children[i].appendChild(playerOne);
            }
            else{
                count++;
                return columnTarget.children[i].appendChild(playerTwo);   
            }
            
        }
        
    }
     
}







