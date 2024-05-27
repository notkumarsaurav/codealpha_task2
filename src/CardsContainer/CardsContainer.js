function CardsContainer () {
    return(
        <section className="main-cards-container">
            <div className="main-card">
                <p className="username"><i className="fab fa-facebook-square"></i>@saurabh</p>
                <h1 className="followers__number">9.418</h1>
                <p className="followers__title">Followers</p>
                <p className="followers__today up"><i className="fas fa-caret-up"></i>12 Today</p>
            </div>

            <div className="main-card">
                <p className="username twitter"><i className="fab fa-twitter"></i>@outenzi</p>
                <h1 className="followers__number">7110</h1>
                <p className="followers__title">Followers</p>
                <p className="followers__today up"><i className="fas fa-caret-up"></i>15 Today</p>
            </div>

            <div className="main-card">
                <p className="username instagram">
                    <i className="fab fa-instagram"></i>@page_scratcher
                </p>
                <h1 className="followers__number">33.8k</h1>
                <p className="followers__title">Followers</p>
                <p className="followers__today up"><i className="fas fa-caret-up"></i>20 Today</p>
            </div>

            <div className="main-card">
                <p className="username youtube-square">
                    <i className="fab fa-youtube-square"></i>Intenzi
                </p>
                <h1 className="followers__number">112k</h1>
                <p className="followers__title">Subscribers</p>
                <p className="followers__today down"><i className="fas fa-caret-down"></i>30 Today</p>
            </div>
        </section>
    );
}

export default CardsContainer;