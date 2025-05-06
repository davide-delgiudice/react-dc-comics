import BlueSection from "./BlueSection"
import ListComics from "./ListComics"
import Jumbotron from "./Jumbotron"

const Main = () => {
  return (
    <main>
        <Jumbotron />
        <div className="bg-dark padding-40">
            <ListComics />
        </div>
        <BlueSection />
    </main>
  )
}

export default Main