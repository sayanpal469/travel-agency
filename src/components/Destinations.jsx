import "../styles/Destination.css";
import Zoom from "react-reveal/Zoom";
import meghalaya from "../assets/explore/Dawki- Meghalaya.jpg";
import digha from "../assets/explore/Digha.jpg";

import kedarnath from "../assets/explore/kedernath.jpg";
import ladakh from "../assets/explore/ladakh.jpg";

import puri from "../assets/explore/puri.jpg";
import Dooars from "../assets/explore/Dooars.jpg";
import haridwar from "../assets/explore/haridwar.jpg";

import Mousuni from "../assets/explore/Mousuni dip.jpg";
import NorthSikkim from "../assets/explore/North Sikkim.jpg";

import Kashmir from "../assets/explore/Kashmir.jpg";
import Manali from "../assets/explore/Manali.jpg";
import Spiti from "../assets/explore/Spiti.jpg";
import Sundarban from "../assets/explore/Sundarban.jpg";
import SilkRoute from "../assets/explore/Silk Route.jpg";
import Tawng from "../assets/explore/Tawng-Arunachal Pradesh.jpg";
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
                      <img src={Kashmir} alt="Kashmir" />
                    </div>
                    <div className="photo__name">Kashmir</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img src={ladakh} alt="Ladakh" />
                    </div>
                    <div className="photo__name">Ladakh</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img src={Manali} alt="Manali" />
                    </div>
                    <div className="photo__name">Manali</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img src={Manali} alt="Shimla" />
                    </div>
                    <div className="photo__name">ShimlaW</div>
                  </div>
                </div>
              </div>
              <div className="gallery__strip__wrapper">
                <div className="gallery__strip two">
                  <div className="photo">
                    <div className="photo__image">
                      <img src={Spiti} alt="Spiti" />
                    </div>
                    <div className="photo__name">Spiti</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img src={kedarnath} alt="Kedarnath" />
                    </div>
                    <div className="photo__name">Kedarnath</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img src={NorthSikkim} alt="NorthSikkim" />
                    </div>
                    <div className="photo__name">Sikkim</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img src={SilkRoute} alt="SilkRoute" />
                    </div>
                    <div className="photo__name">Silk Route</div>
                  </div>
                </div>
              </div>
              <div className="gallery__strip__wrapper">
                <div className="gallery__strip three">
                  <div className="photo">
                    <div className="photo__image">
                      <img src={haridwar} alt="Haridwar" />
                    </div>
                    <div className="photo__name">DarjeelingW</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img src={Dooars} alt="Dooars" />
                    </div>
                    <div className="photo__name">Dooars</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img src={Tawng} alt="Tawng" />
                    </div>
                    <div className="photo__name">Arunachal</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img src={meghalaya} alt="Meghalaya" />
                    </div>
                    <div className="photo__name">Meghalaya</div>
                  </div>
                </div>
              </div>
              <div className="gallery__strip__wrapper">
                <div className="gallery__strip four">
                  <div className="photo">
                    <div className="photo__image">
                      <img src={puri} alt="Puri" />
                    </div>
                    <div className="photo__name">Puri</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img src={digha} alt="Digha" />
                    </div>
                    <div className="photo__name">Digha</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img src={Mousuni} alt="Mandarmani" />
                    </div>
                    <div className="photo__name">Mandarmani</div>
                  </div>
                  <div className="photo">
                    <div className="photo__image">
                      <img src={Sundarban} alt="Sundarban" />
                    </div>
                    <div className="photo__name">Sundarban</div>
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
