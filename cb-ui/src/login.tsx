import Home from './pages/home.tsx'
import Account from './pages/account.tsx'
import Kanban from './pages/kanban.tsx'
import Team from './pages/team.tsx'
import Task from './pages/task.tsx'
import Ratings from './pages/ratings.tsx'
import Repair from './pages/repair.tsx'
import Timeline from './pages/timeline.tsx'

import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from 'react'

export default function Login() {
    const [ loginStatus, setLoginStatus ] = useState(false);
    const [ userRank, setUserRank ] = useState<string>("employe");

    const router = createBrowserRouter([
      {path: "/", element: <Home Rank={userRank}/>},
      {path: "/account", element: <Account />},
      {path: "/kanban", element: <Kanban />},
      {path: "/team", element: <Team/>},
      {path: "/task", element: <Task />},
      {path: "/ratings", element: <Ratings />},
      {path: "/repair", element: <Repair />},
      {path: "/timeline", element: <Timeline />},
    ]);
    

    

    if (loginStatus === true) {
        return (
            <>
                <div className="grid grid-cols-4 items-center justify-center">
                    <button onClick= {() => setUserRank("ceo")} className="rounded content-center text-center border-2">
                        CEO
                    </button>
                    <button onClick= {() => setUserRank("admin")} className="rounded content-center text-center border-2">
                        Admin
                    </button>
                    <button onClick= {() => setUserRank("manager")} className="rounded content-center text-center border-2">
                        Manger
                    </button>
                    <button onClick= {() => setUserRank("employe")} className="rounded content-center text-center border-2">
                        Employe
                    </button>
                </div>
                <RouterProvider router={router} />
            </>
        )
    } else {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="grid grid-rows-3 gap-4 p-6 border rounded shadow-md max-w-[400px]">
                    <input type="text" placeholder="Username" className="mb-2 px-4 py-2 border rounded content-center text-center" />
                    <input type="password" placeholder="Password" className="mb-2 px-4 py-2 border rounded content-center text-center" />
                    <button onClick= {() => setLoginStatus(true)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded content-center text-center">
                        Sign In
                    </button>
                </div>
            </div>
        )
    }
}