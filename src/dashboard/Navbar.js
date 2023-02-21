import AllStudents from './AllStudents';
import SingleStudent from './SingleStudent';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom';

export default function Navbar(){
    return (
        <BrowserRouter>
        <nav className="nav">
        <span className="siteTitle">Students-Dashboard</span>
        <ul>
            <li>
                <Link to="/">All Students</Link>
            </li>
            <li>
                <Link to="/SingleStudent">Single Student</Link>
            </li>
        </ul>
    </nav>
        <Routes>
          <Route path="/" element={<AllStudents />} /> 
          <Route path="SingleStudent" element={<SingleStudent />} />
          <Route path="/SingleStudent/:studentName" element={<SingleStudent />}/>
        </Routes>
        </BrowserRouter>
    )
}