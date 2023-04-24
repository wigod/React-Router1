import {Routes, Route, Link} from "react-router-dom";

/*Homme Component*/
const Home=()=>(
  <div>
    <h2>Home</h2>
  </div>
);

/*Category Component*/
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
);

/*Products Component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);


/* App Component */
const App = () => {
  return(
    <>
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          {/*Link components are used for linking to other views*/}
          <li>
            {""}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      {/*Route component are rendered if path prop matchesthe current URL*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
    </>
  )
}

export default App;
