import { Outlet,Link } from "react-router-dom";
const Layout=()=>{
    return(
        <>
         <h1 align="center"> HOME MART</h1>
        <nav>
        
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Products">Products</Link></li>
                <li><Link to="/Addproducts">Addproducts</Link></li>
                <li><Link to="/Addcatagory">Addcatagory</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
              
            </ul>
        </nav>
        <br></br>
        
    
       <Outlet/>
        </>
    )
}
export default Layout;