import { useState } from "react"

const useWordle = ()=>{
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]); //each guess is an array
    const [history, setHistory] = useState([]); //each guess is a string
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {
        console.log('formatting guess')

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
            formatGuess()
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