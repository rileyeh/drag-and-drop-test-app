import React, { useState } from 'react'
import './MyTest.scss'

const MyTest = () => {
    const [board, setBoard] = useState(
        [
            {
                name: 'board one',
                bgcolor: 'red'
            },
            {
                name: 'board two',
                bgcolor: 'red'
            },
            {
                name: 'board three',
                bgcolor: 'red'
            },
            {
                name: 'board four',
                bgcolor: 'red'
            },
            {
                name: 'board five',
                bgcolor: 'red'
            },
            {
                name: 'board six',
                bgcolor: 'red'
            },
            {
                name: 'board seven',
                bgcolor: 'red'
            },
            {
                name: 'board eight',
                bgcolor: 'red'
            }  
        ]
    )

    console.log('what is board', board, typeof board)

    const onDragStart = (e, index) => {
        e.dataTransfer.setData('index', index)

    }

    const onDragOver = (e, i) => {
        e.preventDefault()
        board[i].bgcolor = 'black'
        setBoard(board)
    }

    const onDragLeave = (e, i) => {
        e.preventDefault()
        board[i].bgcolor = 'red'
        setBoard(board)
    }

    const onDrop = (e, i) => {
    console.log('what is board', board, typeof board)

        const moduleTwo = [
            {
                name: 'square',
                bgcolor: 'blue',
                number: 2
            },
            {
                name: 'square',
                bgcolor: 'blue',
                number: 2
            }
        ]
        const moduleThree = [
            {
                name: 'square',
                bgcolor: 'blue',
                number: 3
            },
            {
                name: 'square',
                bgcolor: 'blue',
                number: 3
            },
            {
                name: 'square',
                bgcolor: 'blue',
                number: 3
            }
        ]
        let index = +e.dataTransfer.getData('index')

        index === 2 && board.splice(i, index, moduleTwo[0], moduleTwo[1])
        index === 3 && board.splice(i, index, moduleThree[0], moduleThree[1], moduleThree[2])

        setBoard(board)
    }

    return (
        <div className='main'>
            <h1>btlsrv test</h1>
                        
            <div className='flex'  
            onDragStart={e => onDragStart(e, 2)}
            draggable
            >
                    <div 
                        className='box'
                        style={{'background': 'blue'}}
                    ></div>
                    <div 
                        className='box'
                        style={{'background': 'blue'}}
                    ></div>
            </div>

            <div className='flex'  
            onDragStart={e => onDragStart(e, 3)}
            draggable
            >
                    <div 
                        className='box'
                        style={{'background': 'blue'}}
                    ></div>
                    <div 
                        className='box'
                        style={{'background': 'blue'}}
                    ></div>
                    <div 
                        className='box'
                        style={{'background': 'blue'}}
                    ></div>
            </div>

            <div className='flex'>
                {board.map((space, i) => {
                    console.log(space)
                    return (
                        <div 
                        key={i} 
                        className='box-two'
                        onDragOver={e => onDragOver(e, i)}
                        onDragLeave={e => onDragLeave(e, i)}
                        onDrop={e => onDrop(e, i)}
                        style={{'background': space.bgcolor}}/>
                    )
                })}
            </div>
        </div>
    )
}

export default MyTest