import BlueSection from "./BlueSection"
import ListComics from "./ListComics"
import Jumbotron from "./Jumbotron"

const Main = () => {
  return (
    <main>
        <Jumbotron />
        <div className="bg-dark padding-dark">
            <ListComics />
            <div className="load-box">
                <a href="#"><div className="load color-white">LOAD MORE</div></a>
            </div>
        </div>
        <BlueSection />
    </main>
  )
}

export default Main