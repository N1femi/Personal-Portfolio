function Nav() {
  return (
    <>
      <a id="home-btn" className="nav-btn"> Nifemi's WRLD</a>
      <a className="nav-btn">Timeline</a>
      <a className="nav-btn">Archives</a>
      <a className="nav-btn">Resume</a>
    </>
  )
}

function IntroCard() {
  return (
    <>
      <div id="intro-card">
        <h3>
          Hello!
        </h3>

        <h2>
          My name is: { "Oluwanifemi Babajide" }
        </h2>

        <p>An aspiring Software, Systems, & AI/ML Engineer. </p>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Nav />
      <IntroCard />
    </>
  )
}

export default App