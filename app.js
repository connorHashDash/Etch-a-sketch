const masterDiv = document.querySelector('#grid-master');
const reset = document.querySelector('#reset')
const changeRes = document.querySelector('#changeRes')
let gridInput = 16;


//const gridAmount = prompt('Amount of rows and columns?')
function makegrid(x){
let gridSize = x * x - 1;
    masterDiv.style.gridTemplateColumns =`repeat(${x}, 1fr)`
    masterDiv.style.gridTemplateRows =`repeat(${x}, 1fr)`
for (i = 0; i <= gridSize; ++i){
    let gridDiv = document.createElement('div')
    gridDiv.className = 'gridDivs'
    masterDiv.appendChild(gridDiv)
    gridDiv.addEventListener('mouseover', function (e) {
        this.style.backgroundColor = 'black';
    });
}
}

function clearGrid(x){
    masterDiv.innerHTML = ''
}

changeRes.addEventListener('click', function(){
    clearGrid(gridInput);
    gridInput = prompt('please select new resolution please put within 1 - 64 range');
    if (gridInput > 64 || gridInput < 1)  {
        alert('Out of Range');
        return;
    }
    makegrid(gridInput)
});

reset.addEventListener('click', function(){
    clearGrid(gridInput);
    makegrid(gridInput)
});

makegrid(gridInput)








