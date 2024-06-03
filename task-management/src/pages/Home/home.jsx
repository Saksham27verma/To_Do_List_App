import Navbar from "../../components/Navbar/navbar"; //Importing Navbar 
import Task from "./task-manage"; //Importing Task Page

const Home = () => {
    return(
        <div>
           <Navbar/>
           <Task/>
        </div>
    )
}

export default Home;