import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Background Image */}
      <div 
        className="landing-bg"
        style={{
          backgroundImage: "url('/src/assets/images/plants-bg.jpg')"
        }}
      />
      
      {/* Content */}
      <div className="landing-content">
        <h1>GreenScape Plants</h1>
        
        <p>
          We bring nature indoors with a curated selection of vibrant, 
          easy-care houseplants delivered straight to your door.
        </p>
        
        <Link 
          to="/products"
          className="btn btn-primary"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default LandingPage 