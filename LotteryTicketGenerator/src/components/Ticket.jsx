import {useState} from "react";
import "./ticket.css"
import { generateTicket,sum } from "../helper";

export default function Ticket({n}){
    let [ticketArr,setticketArr]=useState(generateTicket(n))
    let iswinning =sum(ticketArr)>30;
    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticketBox">
                {
                    ticketArr.map((ticket)=> <span>{ticket}</span>)
                }
            </div>
            <button onClick={()=>generateTicket(n)}>Buy New Ticket</button>
            <h4>
                {
                    iswinning && "Congratulations you won!"
                }
            </h4>
        </div>
        
    )
}