import ".././index.css"

type Login = {
  Rank: string,
}

export default function Repair({Rank}: Login) {
  if (Rank === "ceo") {
    return (
      <>
      </>
    )
  }
  else if (Rank === "admin") {
    return (
      <>
        <div className="grid grid-cols-11 m-2">
            <h1 className="grid col-start-1 col-end-6  content-center text-center border-2">
                Type Name
            </h1>
            <h1 className="grid col-start-6 col-end-9  content-center text-center border-2">
                CB Version
            </h1>
            <h1 className="grid col-start-9 col-end-12  content-center text-center border-2">
                Video Link
            </h1>

        </div>
      </>
    )
  } else if (Rank === "manager") {
    return (
      <>
        <div className="grid grid-cols-11 m-2">
            <h1 className="grid col-start-1 col-end-6  content-center text-center border-2">
                Type Name
            </h1>
            <h1 className="grid col-start-6 col-end-9  content-center text-center border-2">
                CB Version
            </h1>
            <h1 className="grid col-start-9 col-end-12  content-center text-center border-2">
                Video Link
            </h1>

        </div>
      </>
    )
  } else if (Rank === "employe") {
    return (
      <>
        <div className="grid grid-cols-11 m-2">
            <h1 className="grid col-start-1 col-end-6  content-center text-center border-2">
                Type Name
            </h1>
            <h1 className="grid col-start-6 col-end-9  content-center text-center border-2">
                CB Version
            </h1>
            <h1 className="grid col-start-9 col-end-12  content-center text-center border-2">
                Video Link
            </h1>

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