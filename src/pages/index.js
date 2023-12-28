import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import bgGreen from "../images/bg-green.png"

const IndexPage = () => {
  return (
    <main>
      <div className="flex flex-col gap-4 bg-stone-950">
        <h2>
          We help companies <br />
          scale while being secure
        </h2>

        <p>
          Hi, we’re a cyber security and devops agency which helps fast paced
          startups scale. ada berubah
        </p>
        <button>
          Book a Call
        </button>
        <StaticImage src={bgGreen} alt="A dinosaur" />
      </div>
      <p></p>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
