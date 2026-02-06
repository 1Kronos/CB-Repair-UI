import './hero.css'
import { Link } from 'react-router-dom'

export default function Hero() {

  return (
    <>
      <div className="grid grid-rows-5 grid-cols-23 min-w-320">
        
        <h1 className="row-start-1 row-end-3 col-start-1 col-end-24 content-center text-center border-2 text-4xl">
          Rocklin Institute Of Technology
        </h1>
        <Link to={"/account"} className="row-start-3 row-end-4 col-start-1 col-end-4 content-center text-center border-2">
          <button>
            Account
          </button>
        </Link>
        <p className="row-start-3 row-end-4 col-start-5 col-end-8 content-center text-center border-2">
          Kanban Board
        </p>
        <p className="row-start-3 row-end-4 col-start-9 col-end-12 content-center text-center border-2">
          Team
        </p>
        <p className="row-start-3 row-end-4 col-start-13 col-end-16 content-center text-center border-2">
          Friends
        </p>
        <p className="row-start-3 row-end-4 col-start-17 col-end-20 content-center text-center border-2">
          Ratings
        </p>
        <p className="row-start-3 row-end-4 col-start-21 col-end-24 content-center text-center border-2">
          Repair
        </p>
        <h2 className="row-start-4 row-end-5 col-start-1 col-end-24 content-center text-center border-2">
          User Timeline
        </h2>
      </div>
    </>
  )
}