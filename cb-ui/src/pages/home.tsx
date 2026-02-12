import Hero from '../commponents/hero'
import Task from '../commponents/task'
import Repair from '../commponents/repair'

import '.././index.css'

type Login = {
  Rank: string,
}

export default function Home({Rank}: Login) {
  if (Rank === "ceo") {
    return (
      <>
      </>
    )
  } else if (Rank === "admin") {
    return (
      <> 
        <div>
          <Hero Rank={Rank}/>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen">
          <div className="grid grid-rows-9 border-2 m-3">
            <h1 className="grid row-start-1 row-end-1 content-center text-center border-2">
              Company/Team
            </h1>
            <Task Rank={Rank}/><Task Rank={Rank}/>
            <Task Rank={Rank}/><Task Rank={Rank}/>
            <Task Rank={Rank}/><Task Rank={Rank}/>
            <Task Rank={Rank}/><Task Rank={Rank}/>
          </div>
          <div className="grid grid-rows-9 border-2 m-3">
            <h1 className="grid row-start-1 row-end-1 content-center text-center border-2">
              Repair Instructions
            </h1>
            <Repair Rank={Rank}/><Repair Rank={Rank}/>
            <Repair Rank={Rank}/><Repair Rank={Rank}/>
            <Repair Rank={Rank}/><Repair Rank={Rank}/>
            <Repair Rank={Rank}/><Repair Rank={Rank}/>
          </div>
          <div className="flex items-center justify-center border-2 m-3">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome to the Home Page
            </h1>
          </div>
          <div className="flex items-center justify-center border-2 m-3">
            <p className="text-lg text-gray-600">
              This is the home page of our application.
            </p>
          </div>
        </div>
      </>
    )
  } else if (Rank === "manager") {
    return (
      <> 
        <div>
          <Hero Rank={Rank}/>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen">
          <div className="grid grid-rows-9 border-2 m-3">
            <h1 className="grid row-start-1 row-end-1 content-center text-center border-2">
              Company/Team
            </h1>
            <Task Rank={Rank}/><Task Rank={Rank}/>
            <Task Rank={Rank}/><Task Rank={Rank}/>
            <Task Rank={Rank}/><Task Rank={Rank}/>
            <Task Rank={Rank}/><Task Rank={Rank}/>
          </div>
          <div className="grid grid-rows-9 border-2 m-3">
            <h1 className="grid row-start-1 row-end-1 content-center text-center border-2">
              Repair Instructions
            </h1>
            <Repair Rank={Rank}/><Repair Rank={Rank}/>
            <Repair Rank={Rank}/><Repair Rank={Rank}/>
            <Repair Rank={Rank}/><Repair Rank={Rank}/>
            <Repair Rank={Rank}/><Repair Rank={Rank}/>
          </div>
          <div className="flex items-center justify-center border-2 m-3">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome to the Home Page
            </h1>
          </div>
          <div className="flex items-center justify-center border-2 m-3">
            <p className="text-lg text-gray-600">
              This is the home page of our application.
            </p>
          </div>
        </div>
      </>
    )
  } else if (Rank === "employe") {
  return (
    <> 
      <div>
        <Hero Rank={Rank}/>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen">
        <div className="grid grid-rows-9 border-2 m-3">
          <h1 className="grid row-start-1 row-end-1 content-center text-center border-2">
            Company/Team
          </h1>
          <Task Rank={Rank}/><Task Rank={Rank}/>
          <Task Rank={Rank}/><Task Rank={Rank}/>
          <Task Rank={Rank}/><Task Rank={Rank}/>
          <Task Rank={Rank}/><Task Rank={Rank}/>
        </div>
        <div className="grid grid-rows-9 border-2 m-3">
          <h1 className="grid row-start-1 row-end-1 content-center text-center border-2">
            Repair Instructions
          </h1>
          <Repair Rank={Rank}/><Repair Rank={Rank}/>
          <Repair Rank={Rank}/><Repair Rank={Rank}/>
          <Repair Rank={Rank}/><Repair Rank={Rank}/>
          <Repair Rank={Rank}/><Repair Rank={Rank}/>
        </div>
        <div className="flex items-center justify-center border-2 m-3">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to the Home Page
          </h1>
        </div>
        <div className="flex items-center justify-center border-2 m-3">
          <p className="text-lg text-gray-600">
            This is the home page of our application.
          </p>
        </div>
      </div>
    </>
  )
  } else {
    return (
      <div className="grid grid-rows-3">
        <h1 className="text-4xl font-bold text-gray-800">
          Invalid Rank
        </h1>
      </div>
    )
  }
}
