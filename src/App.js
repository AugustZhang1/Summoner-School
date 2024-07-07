import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './assets/images/logo.png';
import coachingChart from './assets/images/coaching-chart.PNG'; 
import BookingForm from './BookingForm';
import Confirm from './Confirm';
import './App.css';

function App() {
  return (
    <Router basename='/Summoner-School'>
      <div className="App">
        <header className="header">
          <div className="header__logo">
            <img src={logo} alt="Summoner School Logo" />
            <h1>Summoner School</h1>
          </div>
          <nav className="header__nav">
            <ul>
              <li><a href="#coaching-plans">Coaching Plans</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={
              <>
                <section className="hero">
                  <div className="hero__overlay"></div>
                  <div className="hero__content">
                    <h2 className="hero__title">Your Climb Starts Here</h2>
                    <p className="hero__description">
                      LoL Coaching from Highly skilled players. Learn the game with coaches who have great experiences and evolve your game to the next level and unleash your skill today. Start with Challenger Player and get your first League of Legends coaching lesson now.
                    </p>
                    <button className="button--primary">Get Started</button>
                  </div>
                </section>
                <section className="reviews">
                  <h2 className="reviews__title">Read Reviews</h2>
                  <div className="reviews__list">
                    <div className="review">
                      <div className="review__header">
                        <div className="review__rating">⭐⭐⭐⭐⭐</div>
                        <div className="review__date">00/00/0000</div>
                      </div>
                      <div className="review__content">
                        <div className="review__username">Username</div>
                        <div className="review__text">Their Review</div>
                      </div>
                    </div>
                    <div className="review">
                      <div className="review__header">
                        <div className="review__rating">⭐⭐⭐⭐⭐</div>
                        <div className="review__date">00/00/0000</div>
                      </div>
                      <div className="review__content">
                        <div className="review__username">Username</div>
                        <div className="review__text">Their Review</div>
                      </div>
                    </div>
                    <div className="review">
                      <div className="review__header">
                        <div className="review__rating">⭐⭐⭐⭐⭐</div>
                        <div className="review__date">00/00/0000</div>
                      </div>
                      <div className="review__content">
                        <div className="review__username">Username</div>
                        <div className="review__text">Their Review</div>
                      </div>
                    </div>
                  </div>
                  <button className="button--primary">Write A Review</button>
                </section>
                <section className="featured-coaches">
                  <h2 className="featured-coaches__title">Featured Coaches</h2>
                  <div className="coaches__list">
                    <div className="coach">
                      <div className="coach__image"></div>
                      <div className="coach__details">
                        <h3 className="coach__name">Name</h3>
                        <div className="coach__rating">⭐⭐⭐⭐⭐</div>
                        <p className="coach__description">Description of the coach and what they offer</p>
                        <div className="coach__price">Price</div>
                        <Link to="/book-coach" className="button--primary">Book now</Link>
                      </div>
                    </div>
                    <div className="coach">
                      <div className="coach__image"></div>
                      <div className="coach__details">
                        <h3 className="coach__name">Name</h3>
                        <div className="coach__rating">⭐⭐⭐⭐⭐</div>
                        <p className="coach__description">Description of the coach and what they offer</p>
                        <div className="coach__price">Price</div>
                        <Link to="/book-coach" className="button--primary">Book now</Link>
                      </div>
                    </div>
                    <div className="coach">
                      <div className="coach__image"></div>
                      <div className="coach__details">
                        <h3 className="coach__name">Name</h3>
                        <div className="coach__rating">⭐⭐⭐⭐⭐</div>
                        <p className="coach__description">Description of the coach and what they offer</p>
                        <div className="coach__price">Price</div>
                        <Link to="/book-coach" className="button--primary">Book now</Link>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="why-coaching">
                  <h2 className="why-coaching__title">Why Get Coaching</h2>
                  <div className="why-coaching__content">
                    <img src={coachingChart} alt="Coaching Chart" className="why-coaching__image" />
                    <p className="why-coaching__description">
                      League of Legends coaching can significantly enhance a player's rank by providing personalized guidance and strategic insights tailored to their gameplay. Coaches, often experienced players or former professionals, can identify and address specific weaknesses, whether they pertain to mechanical skills, macro strategies, or champion mastery. By analyzing replays, coaches offer constructive feedback and actionable advice, helping players to refine their techniques and decision-making processes. Moreover, coaching fosters a deeper understanding of the game's meta, ensuring that players remain adaptable to patches and updates. Ultimately, this targeted approach to improvement can expedite the climb up the ranked ladder, as players apply learned strategies and techniques to overcome challenges and secure victories more consistently.
                    </p>
                  </div>
                </section>
              </>
            } />
            <Route path="/book-coach" element={<BookingForm />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
