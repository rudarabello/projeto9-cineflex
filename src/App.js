
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Movie from "./Routes/Movie";
import Session from "./Routes/Session";


const userObj = {
    name: null,
    id: null,
    movie: {
        id: null,
        title: null,
        url: null,
    },
    seats: [],
    session: {
        id: null,
        date: null,
        weekday: null,
        time: null
    }
}

export default function App() {

    const [user, setUser] = useState(userObj);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home user={user} setUser={setUser} />} />
                <Route path="/filme/:movieId" element={<Movie user={user} setUser={setUser} />} />
                <Route path="/sessao/:sessionId" element={<Session user={user} setUser={setUser} />} />
            </Routes>
        </BrowserRouter>
    );
}

