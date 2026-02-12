

import ".././index.css"

type Login = {
  Rank: string,
}

export default function Task({Rank}: Login) {
  if (Rank === "ceo") {
    return (
      <>
      </>
    )
  }
  else if (Rank === "admin") {
    

    return (
      <>
          <h1 className="grid grid-cols-6 m-2">
            <div className="grid row-start-2 row-end-2 col-start-1 col-end-3  content-center text-center border-2">
              <h1>
                Assigners Name & Rank
              </h1>
            </div>
            <h1 className="grid row-start-2 row-end-2 col-start-3 col-end-5 content-center text-center border-2">
              Task Priortey
            </h1>
            <h1 className="grid row-start-2 row-end-2 col-start-5 col-end-7 content-center text-center border-2">
              Assigned To
            </h1>
          </h1>
      </>
    )
  } else if (Rank === "manager") {
    return (
      <>
          <h1 className="grid grid-cols-6 m-2">
            <h1 className="grid row-start-2 row-end-2 col-start-1 col-end-3  content-center text-center border-2">
              Assigners Name & Rank
            </h1>
            <h1 className="grid row-start-2 row-end-2 col-start-3 col-end-5 content-center text-center border-2">
              Task Priortey
            </h1>
            <h1 className="grid row-start-2 row-end-2 col-start-5 col-end-7 content-center text-center border-2">
              Assigned To
            </h1>
          </h1>
      </>
    )
  } else if (Rank === "employe") {
    return (
      <>
          <h1 className="grid grid-cols-6 m-2">
            <h1 className="grid row-start-2 row-end-2 col-start-1 col-end-3  content-center text-center border-2">
              Assigners Name & Rank
            </h1>
            <h1 className="grid row-start-2 row-end-2 col-start-3 col-end-5 content-center text-center border-2">
              Task Priortey
            </h1>
            <h1 className="grid row-start-2 row-end-2 col-start-5 col-end-7 content-center text-center border-2">
              Assigned To
            </h1>
          </h1>
      </>
    )
  } else {
    return (
      <>
      </>
    )
  }
}