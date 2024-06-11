import Navbar from "../common/Navbar/navbar";
import "./homepage.css";
const homepage = () =>{
    return(
        <div>
        <Navbar page="home"/>
            <div className="homepage-main-container">
                ...Welcome To AI Image Generating Website...
        </div>
        </div>
    )
}

export default homepage;