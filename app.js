const masterDiv = document.querySelector('#grid-master');
let gridInput = 16;
let gridSize = gridInput * gridInput   ;


//const gridAmount = prompt('Amount of rows and columns?')
for (i = 0; i < gridSize; ++i){
    let gridDiv = document.createElement('div')
    gridDiv.className = 'gridDivs'
    masterDiv.appendChild(gridDiv)
    gridDiv.addEventListener('mouseover', function(e){
        this.style.backgroundColor = 'black';
    });
}



