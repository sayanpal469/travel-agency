import "../styles/review.css";
import Slide from "react-reveal/Slide";

const Review = () => {
  return (
    <div>
      <div className="outerdiv mt-12 pb-5" id="review">
        <div className="py-10">
          <h1 className="text-4xl lg:text-5xl  tracking-tight text-gray-600 text-center">
            Beloved by Clients 💖
          </h1>
        </div>
        <div className="innerdiv">
          <Slide left delay={800}>
            <div className="div1 eachdiv">
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                    alt=""
                  />
                </div>
                <div className="detbox">
                  <p className="name">Daniel Clifford</p>
                </div>
              </div>
              <div className="review">
                <h4>
                  My Darjeeling trip with IndiaXplorer was an unforgettable
                  adventure!
                </h4>
                <p>
                  “I had always dreamt of exploring the beautiful hills of
                  Darjeeling, and IndiaXplorer made that dream come true. From
                  the moment I signed up for their tour, I knew I was in for a
                  fantastic experience. The landscapes of Darjeeling are simply
                  breathtaking, and our guides from IndiaXplorer ensured that we
                  didnt miss any of the stunning viewpoints. Whether it was
                  sipping on the finest Darjeeling tea at a local tea estate or
                  taking a peaceful stroll through the lush tea gardens, every
                  day was a new adventure. ”
                </p>
              </div>
            </div>
          </Slide>
          <div className="div2 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img
                  src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg"
                  alt=""
                />
              </div>
              <div className="detbox">
                <p className="name">Jonathan Walters</p>
              </div>
            </div>
            <div className="review">
              <h4>An Unforgettable Journey with IndiaXplorer</h4>
              <p>
                “ My journey with IndiaXplorer in Sundarban was absolutely
                amazing. As a first-time traveler to the region, I was a mix of
                excitement and nerves, but the IndiaXplorer team ensured I had
                an unforgettable experience. ”
              </p>
            </div>
          </div>
          <Slide right delay={1000}>
            <div className="div3 eachdiv">
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg"
                    alt=""
                  />
                </div>

                <div className="detbox">
                  <p className="name dark">Kira Whittle</p>
                </div>
              </div>
              <div className="review dark">
                <h4>
                  An Unforgettable Journey with IndiaXplorer. Highly
                  Recommended!
                </h4>
                <p>
                  “ Before embarking on my trip to Gangtok with IndiaXplorer, I
                  had never explored the beautiful landscapes of Northeast
                  India. I needed a travel experience that would provide me with
                  structure and guidance, allowing me to discover the wonders of
                  this region step by step. A dear friend who had previously
                  traveled with IndiaXplorer highly recommended their services,
                  and I am thrilled to say that they did not disappoint. The
                  entire journey, from the moment I landed in Gangtok, was a
                  testament to IndiaXplorer commitment to providing a top-notch
                  experience ”
                </p>
              </div>
            </div>
          </Slide>
          <Slide left delay={800}>
            <div className="div4 eachdiv">
              <div className="userdetails">
                <div className="imgbox">
                  <img
                    src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
                    alt=""
                  />
                </div>
                <div className="detbox">
                  <p className="name dark">Jeanette Harmon</p>
                </div>
              </div>
              <div className="review dark">
                <h4>An Incredible Journey with IndiaXplorer in Nainital</h4>
                <p>
                  “ I want to express my heartfelt gratitude to IndiaXplorer for
                  an absolutely incredible trip to Nainital. IndiaXplorer team
                  of experts ensured that every moment was filled with wonder
                  and discovery. ”
                </p>
              </div>
            </div>
          </Slide>
          <div className="div5 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img
                  src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                  alt=""
                />
              </div>
              <div className="detbox">
                <p className="name">Patrick Abrams</p>
              </div>
            </div>

            <div className="review">
              <h4>Incredible Support from Fellow Travelers at IndiaXplorer</h4>
              <p>
                “ I cant express enough gratitude for the amazing support I
                received from the IndiaXplorer team during my unforgettable trip
                to Jaipur. The teaching assistants, who had embarked on similar
                journeys themselves, provided awesome guidance and shared their
                invaluable experiences. What sets IndiaXplorer apart is the
                genuine concern and dedication of their staff. They truly care
                about your progress, and its incredibly refreshing. This program
                not only boosted my confidence but also equipped me to navigate
                the world as a capable traveler in Jaipur.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
