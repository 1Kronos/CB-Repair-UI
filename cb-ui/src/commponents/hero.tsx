import '.././index.css'
import { Link } from 'react-router-dom'
import { useState } from "react";

type Login = {
  Rank: string,
}

export default function Hero({Rank}: Login) {
  if (Rank === "ceo") {
    return (
      <>
      </>
    )
  } else if (Rank === "admin") {
    let [shelf, setShelf] = useState("false");

    return (
      <>
        <div className="grid grid-rows-5 grid-cols-23 min-w-320">
          <button className="row-start-1 row-end-3 col-start-1 col-end-2 content-center text-center border-2">
            <h1>
              Menu
            </h1>
          </button>
          
          <Link to={"/"} className="row-start-1 row-end-3 col-start-2 col-end-23 content-center text-center border-2 text-4xl">
            <button>
              Rocklin Institute Of Technology
            </button>
          </Link>

          <button className="row-start-1 row-end-3 col-start-23 col-end-24 content-center text-center border-2">
            <h1>
              Rank
            </h1>
          </button>

          <Link to={"/timeline"} className="row-start-3 row-end-4 col-start-1 col-end-24 content-center text-center border-2">
            <button>
              User Timeline
            </button>
          </Link>
        </div>
      </>
    )
  } else if (Rank === "employe") { 
    return (
      <>
        <div className="grid grid-rows-5 grid-cols-23 min-w-320">
          <Link to={"/"} className="row-start-1 row-end-3 col-start-1 col-end-24 content-center text-center border-2 text-4xl">
            <button>
              Rocklin Institute Of Technology
            </button>
          </Link>
          <Link to={"/account"} className="row-start-3 row-end-4 col-start-1 col-end-4 content-center text-center border-2">
            <button>
              Account
            </button>
          </Link>
          <Link to={"/kanban"} className="row-start-3 row-end-4 col-start-5 col-end-8 content-center text-center border-2">
            <button>
              Kanban Board
            </button>
          </Link>
          <Link to={"/team"} className="row-start-3 row-end-4 col-start-9 col-end-12 content-center text-center border-2" >
            <button>
              Team
            </button>
          </Link>
          <Link to={"/task"} className="row-start-3 row-end-4 col-start-13 col-end-16 content-center text-center border-2">
            <button>
              Task
            </button>
          </Link>
          <Link to={"/ratings"} className="row-start-3 row-end-4 col-start-17 col-end-20 content-center text-center border-2">
            <button>
              Ratings
            </button>
          </Link>
          <Link to={"/repair"} className="row-start-3 row-end-4 col-start-21 col-end-24 content-center text-center border-2">
            <button>
              Repair
            </button>
          </Link>
          <Link to={"/timeline"} className="row-start-4 row-end-5 col-start-1 col-end-24 content-center text-center border-2">
            <button>
              User Timeline
            </button>
          </Link>
        </div>
      </>
    )
  } else {
    return (
      <>
      </>
    )
  }
}