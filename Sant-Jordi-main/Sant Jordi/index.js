document.addEventListener("DOMContentLoaded", function(){
    const scoreDisplay = document.getElementById("score");
    const width = 28;
    let score = 0;
    const grid = document.querySelector(".grid");
    
    //0 - pètal
    //1 - mur
    //2 - cova
    //3 - rosa
    //4 - buit
    
    const layout = [
        1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 3, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 4, 4, 4, 0, 1, 1, 0, 4, 4, 4, 0, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 4, 4, 4, 0, 1, 1, 0, 4, 4, 4, 0, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 4, 4, 4, 0, 1, 1, 0, 4, 4, 4, 0, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 4, 4, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 4, 4, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 4, 4, 4, 0, 1, 1, 0, 4, 4, 4, 0, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 4, 4, 4, 0, 1, 1, 0, 4, 4, 4, 0, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 4, 4, 4, 0, 1, 1, 0, 4, 4, 4, 0, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 3, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 3, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
    ]
    
    let squares = [];

    //Create board
    function createBoard(){
        for(let i=0; i < layout.length; i ++){
            const square = document.createElement('div')
            if(layout[i]==0){
                square.classList.add("white")
            }else if(layout[i]==1){
                square.classList.add("mur")
            }else if(layout[i]==2){
                square.classList.add("blue")
            }else if(layout[i]==3){
                square.classList.add("llibres")
            }else if(layout[i]==4){
                square.classList.add("green")
            }

            grid.appendChild(square);
            squares.push(square)
        }
    }
    
    createBoard();
    console.log(squares)

    let posicioPrincep = 4;
    squares[posicioPrincep].classList.add("princep");

    function movePrincep(e) {
        squares[posicioPrincep].classList.remove("princep");
        switch (e.key) {
            case 'ArrowLeft':
                if(!squares[posicioPrincep-1].classList.contains('mur')&&
                    !squares[posicioPrincep-1].classList.contains('blue'))
                    if(squares[posicioPrincep - 1] === squares[364]){
                        posicioPrincep = 392
                    }
                posicioPrincep -= 1
                break;
            case 'ArrowRight':
                if(!squares[posicioPrincep+1].classList.contains('mur')&&
                    !squares[posicioPrincep+1].classList.contains('blue'))
                posicioPrincep += 1
                break;
                case 'ArrowUp':
                    if(!squares[posicioPrincep-28].classList.contains('mur')&&
                    !squares[posicioPrincep-28].classList.contains('blue'))
                posicioPrincep -= 28
                break;
            case 'ArrowDown':
                if(!squares[posicioPrincep+28].classList.contains('mur')&&
                    !squares[posicioPrincep+28].classList.contains('blue'))
                posicioPrincep += 28
                break;
        }
        squares[posicioPrincep].classList.add("princep");
    }

    document.addEventListener('keyup', movePrincep);

})