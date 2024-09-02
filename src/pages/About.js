import { Navigate } from "react-router-dom"
import { useState } from "react"

export default function About() {
    const [user, setUser] = useState('mario')

    if(!user) {
        return <Navigate to="/" replace={true}/>
    }

    return (
        <div className="about">
            <h2>About</h2>
            <p>Paragraph 2</p>

            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}