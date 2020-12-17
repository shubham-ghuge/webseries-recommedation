import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const database = {
    drama: [
      {
        name: "Scam 1992: The Harshad Mehta Story (2020)",
        desc:
          "Set in 1980's and 90's Bombay, it follows the life of Harshad Mehta, a stockbroker who took the stock market to dizzying heights and his catastrophic downfall.",
        ratings: "9.5",
        links:
          "https://www.youtube.com/results?search_query=Scam 1992: The Harshad Mehta Story (2020)"
      },
      {
        name: "Breaking Bad (2008–2013)",
        desc:
          "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        ratings: "9.5",
        links:
          "https://www.youtube.com/results?search_query=Breaking Bad (2008–2013)"
      },
      {
        name: "Game of Thrones (2011–2019)",
        desc:
          "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        ratings: "9.3",
        links:
          "https://www.youtube.com/results?search_query=Game of Thrones (2011–2019)"
      },
      {
        name: "Flames(2018)",
        desc:
          "A teenage romance from The Timeliners that aims straight from the heart. This web-series is the story of a young romance unfolding as a chemical reaction.",
        ratings: "9.2",
        links: "https://www.youtube.com/results?search_query=Flames(2018)"
      }
    ],
    documentary: [
      {
        name: "Murder on Middle Beach (2020)",
        desc:
          "A young man is determined to solve an unspeakable crime and absolve the people he loves, while looking for answers within his fractured family and community.",
        ratings: "7.5",
        links:
          "https://www.youtube.com/results?search_query=Murder on Middle Beach (2020)"
      },
      {
        name: "Alien Worlds (2020)",
        desc:
          "Applying the laws of life on Earth to rest of the galaxy, this series blends science facts and fiction to imagine alien life on other planets",
        ratings: "6.6",
        links:
          "https://www.youtube.com/results?search_query=Alien Worlds (2020)"
      },
      {
        name: "Room 2806: The Accusation (2020)",
        desc:
          "This docuseries follows the 2011 sexual assault case involving french politician Dominique Strauss-Kahn at the height of his career.",
        ratings: "7.1",
        links:
          "https://www.youtube.com/results?search_query=Room 2806: The Accusation (2020)"
      },
      {
        name: "How to with John Wilson (2020– )",
        desc:
          "An anxious New Yorker who attempts to give everyday advice while dealing with his own personal issues.",
        ratings: "8.7",
        links:
          "https://www.youtube.com/results?search_query=How to with John Wilson"
      }
    ],
    thriller: [
      {
        name: "Narcos (2015–2017)",
        desc:
          "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
        ratings: "8.8",
        links: "https://www.youtube.com/results?search_query=narcos"
      },
      {
        name: "Money Heist",
        desc:
          "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
        ratings: "8.3",
        links: "https://www.youtube.com/results?search_query=Money Heist"
      },
      {
        name: "Dark (2017–2020)",
        desc:
          "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
        ratings: "8.8",
        links: "https://www.youtube.com/results?search_query=DARK"
      },
      {
        name: "The Undoing (2020)",
        desc:
          "Grace Fraser is living the only life she ever wanted for herself. She's a successful therapist, has a devoted husband and young son who attends an elite private school in New York City. ",
        ratings: "7.5",
        links: "https://www.youtube.com/results?search_query=The Undoing (2020)"
      }
    ],
    comedy: [
      {
        name: "Schitt's Creek (2015–2020)",
        desc:
          "When rich video-store magnate Johnny Rose and his family suddenly find themselves broke, they are forced to leave their pampered lives to regroup in Schitt's Creek.",
        ratings: "8.5",
        links: "https://www.youtube.com/results?search_query=Schitt's Creek"
      },
      {
        name: "The Office (2005–2013)",
        desc:
          "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
        ratings: "8.9",
        links: "https://www.youtube.com/results?search_query=The Office"
      },
      {
        name: "Friends (1994–2004)",
        desc:
          "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
        ratings: "8.9",
        links: "https://www.youtube.com/results?search_query=Friends"
      },
      {
        name: "The Big Bang Theory (2007–2019)",
        desc:
          "A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.",
        ratings: "8.1",
        links:
          "https://www.youtube.com/results?search_query=The Big Bang Theory"
      }
    ]
  };
  const seriesCategories = Object.keys(database);
  const [category, setCategory] = useState("drama");
  const series = Object.values(database[category]);
  function showSeries(event) {
    var categoryName = event.target.value;
    setCategory(categoryName);
  }
  return (
    <div className="App">
      <h1>
        Top <span>Web</span> Series
      </h1>
      <div className="r-category">
        {/* printing keys of database */}
        {seriesCategories.map((seriesName) => (
          <input
            key={seriesName}
            type="button"
            onClick={showSeries}
            value={seriesName}
          />
        ))}
      </div>
      <div className="series">
        <h2>{category}</h2>
        <div className="series-list">
          {/* printing objects values */}
          {series.map((cat) => (
            <div className="card" key={cat.name}>
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
              <h4>ratings: {cat.ratings} ⭐</h4>
              <a href={"".concat(cat.links)}>watch trailer here</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
