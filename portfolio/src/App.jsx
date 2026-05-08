import './App.css'

function Nav() {
  return (
    <>
      <a id="home-btn" className="nav-btn nav-logo">Nifemi's WRLD</a>
      <a className="nav-btn">Timeline</a>
      <a className="nav-btn">Archives</a>
      <a className="nav-btn">Resume</a>
    </>
  )
}

function IntroCard() {
  return (
    <>
      <div id="intro-card" className="intro-card glass">
        <h3 className="intro-greeting">Hello!</h3>

        <h2 className="intro-name">
          My name is: {"Oluwanifemi Babajide"}
        </h2>

        <p className="intro-text">
          An aspiring Software, Systems, & AI/ML Engineer.
        </p>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Nav/>
      <IntroCard />
    </>
  )
}

export default App