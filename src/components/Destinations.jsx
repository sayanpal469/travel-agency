import "../styles/Destination.css";
import Zoom from "react-reveal/Zoom";
import meghalaya from "../assets/explore/Dawki- Meghalaya.jpg"
import digha from "../assets/explore/Digha.jpg"
import gantok from "../assets/explore/Gangtok.jpg"
import kedarnath from "../assets/explore/kedernath.jpg"
import ladakh from "../assets/explore/ladakh.jpg"
import masoorie from "../assets/explore/Masoorie.jpg"
import puri from "../assets/explore/puri.jpg"
import Dooars from "../assets/explore/Dooars.jpg"
import haridwar from "../assets/explore/haridwar.jpg"
import Lamahata from "../assets/explore/Lamahata.jpg"
import Mousuni from "../assets/explore/Mousuni dip.jpg"
import NorthSikkim from "../assets/explore/North Sikkim.jpg"
import TajMahal from "../assets/explore/Taj Mahal.jpg"
import Rishikesh from "../assets/explore/Rishikesh.jpg"
import SilkRoute from "../assets/explore/Silk Route.jpg"
import Tawng from "../assets/explore/Tawng-Arunachal Pradesh.jpg"
// import Tinchunley from "../assets/explore/Tinchunley.jpg"



const Destinations = () => {
  return (
    <div id="gallery">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-[100%] lg:px-8">
        <h2 className="text-5xl tracking-tight uppercase text-gray-600 text-center">
          Explore & Capture
        </h2>

        <Zoom>
          <div className="mt-12">
            <div className="gallery_box">
              <div className="gallery__strip__wrapper">
                <div className="gallery__strip one">
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={meghalaya}
                        alt="Meghalaya"
                      />
                    </div>
                    <div className="photo__name">Meghalaya</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={digha}
                        alt="Digha"
                      />
                    </div>
                    <div className="photo__name">Digha</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={gantok}
                        alt="Gantok"
                      />
                    </div>
                    <div className="photo__name">Gantok</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={kedarnath}
                        alt="Kedarnath"
                      />
                    </div>
                    <div className="photo__name">Kedarnath</div>
                  </div>
                </div>
              </div>
              <div className="gallery__strip__wrapper">
                <div className="gallery__strip two">
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={ladakh}
                        alt="Ladakh"
                      />
                    </div>
                    <div className="photo__name">Ladakh</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={masoorie}
                        alt="Masoorie"
                      />
                    </div>
                    <div className="photo__name">Masoorie</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={puri}
                        alt="Puri"
                      />
                    </div>
                    <div className="photo__name">Puri</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={Dooars}
                        alt="Dooars"
                      />
                    </div>
                    <div className="photo__name">Dooars</div>
                  </div>
                </div>
              </div>
              <div className="gallery__strip__wrapper">
                <div className="gallery__strip three">
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={haridwar}
                        alt="Haridwar"
                      />
                    </div>
                    <div className="photo__name">Haridwar</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={Rishikesh}
                        alt="Rishikesh"
                      />
                    </div>
                    <div className="photo__name">Rishikesh</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={SilkRoute}
                        alt="SilkRoute"
                      />
                    </div>
                    <div className="photo__name">Silk Route</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={Tawng}
                        alt="Tawng"
                      />
                    </div>
                    <div className="photo__name">Tawng-Arunachal Pradesh</div>
                  </div>
                </div>
              </div>
              <div className="gallery__strip__wrapper">
                <div className="gallery__strip four">
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={Lamahata}
                        alt="Lamahata"
                      />
                    </div>
                    <div className="photo__name">Lamahata</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={Mousuni}
                        alt="Mousuni"
                      />
                    </div>
                    <div className="photo__name">Mousuni</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={NorthSikkim}
                        alt="NorthSikkim"
                      />
                    </div>
                    <div className="photo__name">North Sikkim</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img
                        src={TajMahal}
                        alt="TajMahal"
                      />
                    </div>
                    <div className="photo__name">Taj Mahal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Destinations;
