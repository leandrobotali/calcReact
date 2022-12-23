//los componentes siempre llevan la primer letra en mayuscula
/*eslint no-eval:0*/
import React,{useState} from 'react'
import words from 'lodash.words'
import Functios from './components/Functions'
import MathOperations from './components/MathOperetions'
import Number from './components/Number'
import Result from './components/Result'
import './App.css'

const App = () =>{
    const [stack, setStack] = useState("")

    const items = words(stack,/[^-^+^*^/]+/g)
    console.log('renderiza app',items);
    const value = items.length > 0 ? items[items.length-1]: '0'
    return (
        <main className='react-calculator'>
            <Result value = {value}/>
            <Number 
                onClickNumber={
                    number =>{
                        console.log('Number', number)
                        setStack(`${stack}${number}`)
                    }
                }
            />
            <Functios 
                onContentClear={
                    () => {
                        console.log('content clear')
                        setStack('')
                    }
                }
                onDelete={
                    () => {
                        if(stack.length > 0){
                            console.log('delete')
                            const newStack = stack.substring(0,stack.length -1)
                            setStack(newStack)
                        }
                    }
                }
            />
            <MathOperations
                onClickOperation = {
                    operation => {
                        console.log('operacion', operation)
                        setStack(`${stack}${operation}`)
                    }
                }
                onClickEqual = {
                    equal => {
                        console.log('operacion', equal)
                        setStack(eval(stack).toString())
                    }
                }
            />
        </main>
    )
}

export default App