const Addproducts=()=>{
    return(
        <> 
        <div class="add">
    <h1>ADD PRODUCTS</h1></div><br></br>
    <div>
        <form>
    <label>PRODUCT ID:</label>
    <input type="text" name="Product Id"></input><br></br><br></br>
    <label>PRODUCT NAME:</label>
   <input type="text" name="Product Name"></input> <br></br> <br></br>
   <label>PRODUCT PRICE:</label>
   <input type="text" name="Product Price"></input><br></br><br></br>
   <label>PRODUCT QUANTITY:</label>
   <input type="text" name="Product Quantity"></input> <br></br> <br></br>
    <button type="button">Submit</button>
    <button type="button">Reset</button>
    </form>
        </div>
    </>
    )
}
export default Addproducts;