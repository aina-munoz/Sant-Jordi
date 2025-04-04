document.addEventListener("DOMContentLoaded", function(){
    const scoreDisplay = document.getElementById("score");
    const width = 28;
    let score = 0;
    const grid = document.querySelector(".grid");
    
    
    const layout = [
        1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 0, 0, 0, 1, 1, 1, 3, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 1, 1, 1, 0, 0, 0, 3, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 4, 0, 0, 1, 1, 0, 0, 4, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 0, 1, 1, 0, 0, 0, 3, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 3, 0, 0, 0, 3, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 3, 0, 0, 0, 3, 1, 1,
        1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
        1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 3, 0, 0, 0, 3, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 3, 0, 0, 0, 3, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 0, 1, 1, 0, 0, 0, 3, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 4, 0, 0, 1, 1, 0, 0, 4, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1,
        1, 3, 0, 0, 0, 1, 1, 1, 3, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 1, 1, 1, 0, 0, 0, 3, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
    ]
    
    let squares = [];


    function createBoard(){
        for(let i=0; i < layout.length; i ++){
            const square = document.createElement('div')
            if(layout[i]==0){
                square.classList.add("white")
            }else if(layout[i]==1){
                square.classList.add("mur")
            }else if(layout[i]==2){
                square.classList.add("brown")
            }else if(layout[i]==3){
                square.classList.add("rosa")
            }else if(layout[i]==4){
                square.classList.add("llibres")
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
                    !squares[posicioPrincep-1].classList.contains('brown'))
                posicioPrincep -= 1

                if(squares[posicioPrincep - 1] === squares[336]){
                    posicioPrincep = 419
                }
                break;
            case 'ArrowRight':
                if(!squares[posicioPrincep+1].classList.contains('mur')&&
                    !squares[posicioPrincep+1].classList.contains('brown'))
                posicioPrincep += 1

                if(squares[posicioPrincep + 1] === squares[419]){
                    posicioPrincep = 336
                }
                break;
                case 'ArrowUp':
                    if(!squares[posicioPrincep-28].classList.contains('mur')&&
                    !squares[posicioPrincep-28].classList.contains('brown'))
                posicioPrincep -= 28
                break;
            case 'ArrowDown':
                if(!squares[posicioPrincep+28].classList.contains('mur')&&
                    !squares[posicioPrincep+28].classList.contains('brown'))
                posicioPrincep += 28
                break;
        }
        squares[posicioPrincep].classList.add("princep");
        petalAgafat()
        rosaAgafada()
        //checkForWin()
        //checkForGameOver()
    }

    document.addEventListener('keyup', movePrincep);
    function petalAgafat(){
        if(squares[posicioPrincep].classList.contains('rosa')){
            score+=2
            scoreDisplay.innerHTML=score
            squares[posicioPrincep].classList.remove('rosa')
        }
    }
    function rosaAgafada(){
        if(squares[posicioPrincep].classList.contains('llibres')){
            score+=10
            scoreDisplay.innerHTML=score
            squares[posicioPrincep].classList.remove('llibres')
        }
    }

    class Drac {
        constructor(className, startIndex, speed){
            this.className=className
            this.startIndex=startIndex
            this.speed=speed
            this.currentIndex=startIndex
            this.isScared= false
            this.timerId= NaN
        }
    }

    const dracs = [
        new Drac('drac', 348, 250),
        new Drac('drac2', 351, 250),
        new Drac('drac3', 404, 250),
        new Drac('drac4', 406, 250)
    ]

console.log(dracs)

})