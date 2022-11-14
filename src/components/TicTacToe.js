import React from 'react'
import "../index.css"
import {useEffect, useState} from "react"

function TicTacToe() {
    // object holding name and symbol of each player in the game
    const players ={
        CPU: {
            SYM: "O",
            NAME: "CPU",
        },
        HUMAN: {
            SYM: "X",
            NAME: "You",
        },
    };
  return (
    <div className='tictac'>
        game here
    </div>
  )
}

export default TicTacToe