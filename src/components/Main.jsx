import BlueSection from "./BlueSection"
import ListComics from "./ListComics"
import Jumbotron from "./Jumbotron"

const Main = () => {
  return (
    <main>
        <Jumbotron />
        <div className="bg-dark">
            <ListComics />
        </div>
        <BlueSection />
    </main>
  )
}

export default Main