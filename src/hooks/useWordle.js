import { useState } from "react"

const useWordle = (solution)=>{
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]); //each guess is an array
    const [history, setHistory] = useState([]); //each guess is a string
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {
        let solutionArray = [...solution]
        let guessArray = [...currentGuess]
        let formattedGuess = [...currentGuess].map((l)=>({key:l, color:'grey'}))
        
        //find green
        formattedGuess.forEach((l, i)=>{
            if(solutionArray[i] === l.key){
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })
        //find yellow
        formattedGuess.forEach((l, i)=>{
            if(solutionArray.includes(l.key) && l.color !== 'green'){
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })
        return formattedGuess

    }
    const addNewGuess = () => {

    }
    const handleKeyup = ({key}) => {
        if(key === "Enter"){
            if(turn > 5){
                console.log('you used all of your turn')
                return
            }
            if(currentGuess.length !== 5){
                console.log('word too short')
                return
            }
            if(history.includes(currentGuess)){
                console.log('you already tried that')
                return
            }
            const formatted = formatGuess()
            console.log(formatted)
        }
        if(key === 'Backspace'){
            setCurrentGuess((prev)=>{
                return prev.slice(0, -1)
            })
            return
        }
        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess((prev)=>{
                    return prev + key
                })
            }
        }
    }
    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}
export default useWordle