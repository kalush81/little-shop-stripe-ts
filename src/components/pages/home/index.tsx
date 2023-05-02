import { Link } from "react-router-dom";
import './home.css'

export default function Home() {
    return <div className="home-layout">
  <div>
    <h1>Online shopping simplified</h1>
    <p>
      Order your groceries from <em>SuperM</em> with our easy to use app, and
      get your products delivered straight to your doorstep.
    </p>
    <Link to="/products" className="btn btn-default">
      Start shopping
    </Link>
  </div>
  <img
    src="https://res.cloudinary.com/dbzx3snkc/image/upload/v1682953597/Garvin%20paintings/Scene_mieis1.jpg"
    width={350}
    height={240}
    className="rounded home-image"
    alt=""
  />
</div>;
}