import { update as updateSnake, render as renderSnake, Snake_Speed, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateObject, render as renderObject} from './food.js' 
import {outsideGrid} from './grid.js'

let gameOver =false
const gameBoard = document.getElementById('game-board')
let lastRenderTime= 0

function start(currentTime){ 
if(gameOver){
    if(confirm("You lose! Don't lose... duh. Press OK to try again")){
        window.location ='/Game_Display.html'
    }
    return
}


    window.requestAnimationFrame(start)
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000
    if(secondsSinceLastRender < 1/ Snake_Speed) {
    return}
    

   
    lastRenderTime = currentTime 
    
    update()
    render()
} 

window.requestAnimationFrame(start)

function update(){
updateSnake()
updateObject()
checkDeath()
}

function render(){
    gameBoard.innerHTML = ''
renderSnake(gameBoard)
renderObject(gameBoard)
} 

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}