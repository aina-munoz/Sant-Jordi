document.addEventListener("DOMContentLoaded", function(){
    const scoreDisplay = document.getElementById("score");
    const width = 28;
    let score = 0;
    const grid = document.querySelector(".grid");


    
    const layout = [
        1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 3, 1,
        1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1,
        1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 4, 3, 3, 1, 1, 3, 3, 4, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1,
        1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1,
        1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1,
        1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1,
        1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1,
        3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1,
        1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1,
        1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3,
        1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1,
        1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1,
        1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
        1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1,
        1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1,
        1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 4, 3, 3, 1, 1, 3, 3, 4, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1,
        1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1,
        1, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 3, 1,
        1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1,
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

        var audio = document.getElementById("audio");
        audio.play();

        squares[posicioPrincep].classList.add("princep");
        petalAgafat()
        rosaAgafada()
        checkForWin()
        checkForGameOver()
    }

    document.addEventListener('keyup', movePrincep);
    function petalAgafat(){
        if(squares[posicioPrincep].classList.contains('rosa')){
            score+=1
            scoreDisplay.innerHTML=score
            squares[posicioPrincep].classList.remove('rosa')
        }
    }
    function rosaAgafada(){
        if(squares[posicioPrincep].classList.contains('llibres')){
            score+=10
            scoreDisplay.innerHTML=score
            squares[posicioPrincep].classList.remove('llibres');
            espantaDracs(true)
            setTimeout(()=>espantaDracs(false),1500)
        }
    }

    function espantaDracs(scaredDrac) {
        dracs.forEach(drac => drac.isScared = scaredDrac)
    }

    class Drac {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }

    const dracs = [
        new Drac('drac', 348, 250),
        new Drac('drac2', 351, 250),
        new Drac('drac3', 404, 250),
        new Drac('drac4', 407, 250)
    ]

//console.log(dracs)


dracs.forEach(drac => squares[drac.currentIndex].classList.add(drac.className, 'drac'))

dracs.forEach(drac => moveDrac(drac))

function moveDrac(drac) {
    const directions = [-1, 1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    drac.timerId = setInterval(function () {
        if (!squares[drac.currentIndex + direction].classList.contains('mur') && !squares[drac.currentIndex + direction].classList.contains('drac')) {
            squares[drac.currentIndex].classList.remove(drac.className, 'drac', 'drac-espantat')
            drac.currentIndex += direction
            squares[drac.currentIndex].classList.add(drac.className, 'drac')
        } else direction = directions[Math.floor(Math.random() * directions.length)]
        if(drac.isScared){
            squares[drac.currentIndex].classList.add(drac.className, 'drac-espantat')
        }if(drac.isScared && squares[drac.currentIndex].classList.contains('princep')){
            score += 100
            scoreDisplay.innerHTML = score
            squares[drac.currentIndex].classList.remove(drac.className, 'drac', 'drac-espantat')
                drac.currentIndex = drac.startIndex
                drac.isScared = false
                squares[drac.currentIndex].classList.add(drac.className, 'drac')
            
        }
        checkForWin()
        checkForGameOver()

    }, drac.speed
    )


}

function checkForGameOver(){
    if(
        squares[posicioPrincep].classList.contains ('drac') &&
        ! squares[posicioPrincep].classList.contains ('drac-espantat')
    ){
        dracs.forEach(drac=>clearInterval(drac.timerId))
        document.removeEventListener('keyup', movePrincep)
        setTimeout(function(){alert('Game over')})
    }
}

function checkForWin(){
    if(score>= 300){
        dracs.forEach(drac=>clearInterval(drac.timerId))
        document.removeEventListener('keyup', movePrincep)
        setTimeout(function(){alert('You have WON')})
    }
}

})
