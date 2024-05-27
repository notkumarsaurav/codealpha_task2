function Overview() {
    return (
        <>
            <h3 className='overview__title'>Overview - Today</h3>
            <section className="overview-container">
                <div className="overview-card">
                    <div className="overview__number">
                        <p>Page Views</p>
                        <h2>87</h2>
                    </div>
                    <div className="overview__percents">
                        <i className="fab fa-facebook-square"/>
                        <p className="up"><i className="fas fa-caret-up"/>3%</p>
                    </div>
                </div>

                <div className="overview-card">
                    <div className="overview__number">
                        <p>Likes</p>
                        <h2>52</h2>
                    </div>
                    <div className="overview__percents">
                        <i className="fab fa-facebook-square"/>
                        <p className="down">
                            <i className="fas fa-caret-down"/>2%</p>
                    </div>
                </div>

                <div className="overview-card">
                    <div className="overview__number">
                        <p>Likes</p>
                        <h2>5562</h2>
                    </div>
                    <div className="overview__percents">
                        <i className="fab fa-instagram"/>
                        <p className="up">
                            <i className="fas fa-caret-up"></i>2257%</p>
                    </div>
                </div>

                <div className="overview-card">
                    <div className="overview__number">
                        <p>Profile Views</p>
                        <h2>52k</h2>
                    </div>
                    <div className="overview__percents">
                        <i className="fab fa-instagram"></i>
                        <p className="up"><i className="fas fa-caret-up"></i>1375%</p>
                    </div>
                </div>

                <div className="overview-card">
                    <div className="overview__number">
                        <p>Retweets</p>
                        <h2>117</h2>
                    </div>
                    <div className="overview__percents">
                        <i className="fab fa-twitter"></i>
                        <p className="up"><i className="fas fa-caret-up"></i>303%</p>
                    </div>
                </div>

                <div className="overview-card">
                    <div className="overview__number">
                        <p>Likes</p>
                        <h2>507</h2>
                    </div>
                    <div className="overview__percents">
                        <i className="fab fa-twitter"></i>
                        <p className="up"><i className="fas fa-caret-up"></i>553%</p>
                    </div>
                </div>

                <div className="overview-card">
                    <div className="overview__number">
                        <p>Likes</p>
                        <h2>107</h2>
                    </div>
                    <div className="overview__percents">
                        <i className="fab fa-youtube-square"></i>
                        <p className="down"><i className="fas fa-caret-down"></i>19%</p>
                    </div>
                </div>

                <div className="overview-card">
                    <div className="overview__number">
                        <p>Total Views</p>
                        <h2>1407</h2>
                    </div>
                    <div className="overview__percents">
                        <i className="fab fa-youtube-square"></i>
                        <p className="down"><i className="fas fa-caret-down"></i>12%</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Overview;