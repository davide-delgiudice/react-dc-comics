const Main = () => {
  return (
    <main>
        <div className="bg-dark">
            <h2 className="body-margin">Guarda che bella scritta!</h2>
        </div>
        <section>
            <ul className="main-margin">
                <li>
                    <img src="/src/assets/img/buy-comics-digital-comics.png" alt="digital-comics" />
                    <a href="#">digital comics</a>
                </li>
                <li>
                    <img src="/src/assets/img/buy-comics-merchandise.png" alt="comics-merchandise" />
                    <a href="#">dc merchandise</a>
                </li>
                <li>
                    <img src="/src/assets/img/buy-comics-subscriptions.png" alt="shop-locator" />
                    <a href="#">subscription</a>
                </li>
                <li>
                    <img className="smaller" src="/src/assets/img/buy-comics-shop-locator.png" alt="subscriptions" />
                    <a href="#">comic shop locator</a>
                </li>
                <li>
                    <img src="/src/assets/img/buy-dc-power-visa.svg" alt="power-visa" />
                    <a href="#">dc power visa</a>
                </li>
            </ul>
        </section>
    </main>
  )
}

export default Main