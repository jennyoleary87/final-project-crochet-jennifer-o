import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const HomePage = () => {
    return (
        <div>
            <section>
                <div>
                    <h1>Welcome to CrochetCorner</h1>
                    <p>
                        Your personal crochet project management hub - track every detail, organize every project, and celebrate your creative journey!
                    </p>
                    <div>
                        <Link to="/projects">
                            <Button>View My Projects</Button>
                        </Link>
                        <Link to="/about">
                            <Button>Learn More</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="about-app">
                <div>
                    <h2>Transform Your Crochet Experience</h2>
                    <div>
                        <p>
                            Whether you're a seasoned crocheter with dozens of projects under your belt or just starting your journey, CrochetCorner is designed to help you stay organized and motivated.
                            No more forgotten hook sizes, lost pattern names, or wondering how long that cardigan actually took to complete.
                            Say goodbye to scattered notebooks and hello to organized, accessible project tracking that grows with your passion for crochet.
                        </p>
                    </div>
                </div>
            </section>

            <section className="features">
                <div>
                    <h2>Everything You Need to Stay Organized</h2>
                    <div>
                        <ul className="feature-list">
                            <li><strong>Project Details:</strong> Store yarn information, hook sizes, and personal notes</li>
                            <li><strong>Easy Management:</strong> Create, edit, or remove projects with simple, intuitive forms</li>
                            <li><strong>Project History:</strong> Look back on completed works and remember the details that made each special</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;