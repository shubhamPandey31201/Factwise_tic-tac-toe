import React from "react";
import boardcss from "../componentCSS/Board.css";





function Board(){
    return(
        <>
        <div className="board" style={boardcss}>
            <table>
                <tbody>
                    <tr>
                        <td><i className="fa-solid fa-xmark black"></i></td>
                        <td><i className="fa-solid fa-xmark black"></i></td> 
                        <td><i className="fa-solid fa-xmark black"></i></td>  
                    </tr>
                    <tr>
                        <td><i className="fa-regular fa-circle green"></i></td>
                        <td><i className="fa-regular fa-circle green"></i></td>
                        <td><i className="fa-regular fa-circle green"></i></td>
                    </tr>
                    <tr>
                        <td><i className="fa-solid fa-xmark black"></i></td>
                        <td><i className="fa-solid fa-xmark black"></i></td>
                        <td><i className="fa-solid fa-xmark black"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>

    );

    
}
export default Board;