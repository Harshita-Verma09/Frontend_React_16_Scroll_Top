import React from "react";
import "./App.css";
import GoToTop from "./components/GoToTop";

function App() {
  return (
    <>
      <div className="content">
        <h1>Welcome to TechSphere</h1>
        <p className="subheading">
          Stay updated with the latest innovations and tech trends.
        </p>

        <section className="section">
          <h2>🚀 The Future of Technology</h2>
          <p>
            The world of technology is evolving rapidly, with AI, blockchain, and cloud computing
            shaping the future. Companies are adopting automation and data-driven solutions to stay
            competitive.
          </p>
        </section>

        <section className="section">
          <h2>🌍 AI & Machine Learning</h2>
          <p>
            Artificial Intelligence (AI) is transforming industries, from healthcare to finance. With
            deep learning and neural networks, machines are now capable of performing complex tasks
            like speech recognition, image processing, and real-time decision-making.
          </p>
        </section>

        <section className="section">
          <h2>🔗 Blockchain Revolution</h2>
          <p>
            Blockchain technology is revolutionizing the way we think about security and transparency.
            Decentralized finance (DeFi) and NFTs are reshaping digital assets, making transactions
            more secure and efficient.
          </p>
        </section>

        <section className="section">
          <h2>☁️ Cloud Computing & Cybersecurity</h2>
          <p>
            The demand for cloud solutions is rising as businesses migrate to online platforms.
            Enhanced cybersecurity measures are necessary to protect sensitive data from cyber
            threats and breaches.
          </p>
        </section>

        <p className="scroll-text">
          Scroll down to explore more...
        </p>
      </div>

      <GoToTop />
    </>
  );
}

export default App;
