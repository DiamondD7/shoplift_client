import React, { useState, useEffect } from "react";
import AllProducts from "./AllProducts";
import Jackets from "./ApparelNav/MenSubNav/Jackets";
import Hoodie from "./ApparelNav/MenSubNav/Hoodie";
import Shirt from "./ApparelNav/MenSubNav/Shirt";
import Accessories from "./ApparelNav/MenSubNav/Accessories";
import Shoes from "./ApparelNav/MenSubNav/Shoes";
const Browse = () => {
  let component;
  switch (window.location.pathname) {
    case "/browse":
      component = <AllProducts />;
      break;
    case "/men/jackets":
      component = <Jackets />;
      break;
    case "/men/hoodie":
      component = <Hoodie />;
      break;
    case "/men/shirt":
      component = <Shirt />;
      break;
    case "/men/accessories":
      component = <Accessories />;
      break;
    case "/men/shoes":
      component = <Shoes />;
      break;
    default:
      console.log("Switch in browse error");
      break;
  }
  return (
    <div>
      <div className="nav-header">
        <a className="browse-title" href="/">
          <h1>Shoplift NZ</h1>
        </a>
        <ul className="nav-ul">
          <li>
            <button>Apparel</button>
            <div className="dropdown-menu-apparel">
              <ul className="drop-1">
                <li>
                  <h2>Men</h2>
                </li>
                <li>
                  <button>
                    <a href="/men/jackets">Jackets</a>
                  </button>
                </li>
                <li>
                  <button>
                    <a href="/men/hoodie">Hoodies</a>
                  </button>
                </li>
                <li>
                  <button>
                    <a href="/men/shirt">Shirts</a>
                  </button>
                </li>
                <li>
                  <button>
                    <a href="/men/accessories">Accessories</a>
                  </button>
                </li>
                <li>
                  <button>
                    <a href="/men/shoes">Shoes</a>
                  </button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Women</h2>
                </li>
                <li>
                  <button>Dress</button>
                </li>
                <li>
                  <button>Hoodies</button>
                </li>
                <li>
                  <button>Crop-tops</button>
                </li>
                <li>
                  <button>Accessories</button>
                </li>
                <li>
                  <button>Shoes</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <button>Shorts</button>
                </li>
                <li>
                  <button>Pants</button>
                </li>
                <li>
                  <button>Jeans</button>
                </li>
                <li>
                  <button>Socks</button>
                </li>
                <li>
                  <button>Heels</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Kids</h2>
                </li>
                <li>
                  <button>Shirts</button>
                </li>
                <li>
                  <button>Hoodies</button>
                </li>
                <li>
                  <button>Shorts</button>
                </li>
                <li>
                  <button>Accessories</button>
                </li>
                <li>
                  <button>Shoes</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Sports</h2>
                </li>
                <li>
                  <button>Socks</button>
                </li>
                <li>
                  <button>Jerseys</button>
                </li>
                <li>
                  <button>Shorts</button>
                </li>
                <li>
                  <button>Sport Accessories</button>
                </li>
                <li>
                  <button>Shoes</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Outdoor</h2>
                </li>
                <li>
                  <button>Shirts</button>
                </li>
                <li>
                  <button>Bags</button>
                </li>
                <li>
                  <button>Shorts</button>
                </li>
                <li>
                  <button>Survival Accessories</button>
                </li>
                <li>
                  <button>Shoes</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Camping</h2>
                </li>
                <li>
                  <button>Vests</button>
                </li>
                <li>
                  <button>Tops</button>
                </li>
                <li>
                  <button>Pants</button>
                </li>
                <li>
                  <button>Accessories</button>
                </li>
                <li>
                  <button>Shoes</button>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button>Garden</button>
            <div className="dropdown-menu-apparel">
              <ul className="drop-1">
                <li>
                  <h2>Seeds</h2>
                </li>
                <li>
                  <button>Flower Seeds</button>
                </li>
                <li>
                  <button>Herb Seeds</button>
                </li>
                <li>
                  <button>Vegetable Seeds</button>
                </li>
                <li>
                  <button>Tree Seeds</button>
                </li>
                <li>
                  <button>Equipment</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Tools</h2>
                </li>
                <li>
                  <button>Lawn Mowers</button>
                </li>
                <li>
                  <button>Chainsaws</button>
                </li>
                <li>
                  <button>Axes & Hatchets</button>
                </li>
                <li>
                  <button>Trimmers</button>
                </li>
                <li>
                  <button>Turf Rollers</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Plants</h2>
                </li>
                <li>
                  <button>Roses</button>
                </li>
                <li>
                  <button>Indoor Plants</button>
                </li>
                <li>
                  <button>Trees & Shrubs</button>
                </li>
                <li>
                  <button>Fruit Trees</button>
                </li>
                <li>
                  <button>Hedging</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Supplies</h2>
                </li>
                <li>
                  <button>Garden Bed Edging</button>
                </li>
                <li>
                  <button>Fence Extensions</button>
                </li>
                <li>
                  <button>Masnory</button>
                </li>
                <li>
                  <button>Posts</button>
                </li>
                <li>
                  <button>Paving & Stones</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Pest Control</h2>
                </li>
                <li>
                  <button>Weed Killer</button>
                </li>
                <li>
                  <button>Household Pest Control</button>
                </li>
                <li>
                  <button>Lawn Pest</button>
                </li>
                <li>
                  <button>Plant Protection</button>
                </li>
                <li>
                  <button>Weed Control</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Garden Decor</h2>
                </li>
                <li>
                  <button>Artificial & Fake Plants</button>
                </li>
                <li>
                  <button>Garden Clocks</button>
                </li>
                <li>
                  <button>Wall Arts</button>
                </li>
                <li>
                  <button>Gnomes</button>
                </li>
                <li>
                  <button>Garden Structures</button>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <button>Sports</button>
            <div className="dropdown-menu-apparel">
              <ul className="drop-1">
                <li>
                  <h2>Swimming</h2>
                </li>
                <li>
                  <button>Goggles</button>
                </li>
                <li>
                  <button>Fins</button>
                </li>
                <li>
                  <button>Caps</button>
                </li>
                <li>
                  <button>Kayaks & Paddle Boards</button>
                </li>
                <li>
                  <button>Wetsuits</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Basketball</h2>
                </li>
                <li>
                  <button>Shoes</button>
                </li>
                <li>
                  <button>Basketballs</button>
                </li>
                <li>
                  <button>Accessories</button>
                </li>
                <li>
                  <button>Supports</button>
                </li>
                <li>
                  <button>Systems</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Rugby</h2>
                </li>
                <li>
                  <button>Rugby Boots</button>
                </li>
                <li>
                  <button>Rugby Balls</button>
                </li>
                <li>
                  <button>Headgear</button>
                </li>
                <li>
                  <button>Mouthguards</button>
                </li>
                <li>
                  <button>Super Rugby</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Cycling</h2>
                </li>
                <li>
                  <button>Bikes</button>
                </li>
                <li>
                  <button>Tights</button>
                </li>
                <li>
                  <button>Gloves</button>
                </li>
                <li>
                  <button>Compressions</button>
                </li>
                <li>
                  <button>Shorts</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Boxing</h2>
                </li>
                <li>
                  <button>Boxing Gloves</button>
                </li>
                <li>
                  <button>Boxing Bags</button>
                </li>
                <li>
                  <button>Focus & Kick Pads</button>
                </li>
                <li>
                  <button>MMA Gloves</button>
                </li>
                <li>
                  <button>Mouthguards</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Golf</h2>
                </li>
                <li>
                  <button>Umbrellas</button>
                </li>
                <li>
                  <button>Golf Pants</button>
                </li>
                <li>
                  <button>Bags</button>
                </li>
                <li>
                  <button>Putters</button>
                </li>
                <li>
                  <button>Golf Sets</button>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button>Technology</button>
            <div className="dropdown-menu-apparel">
              <ul className="drop-1">
                <li>
                  <h2>Computers</h2>
                </li>
                <li>
                  <button>Apple MacBooks</button>
                </li>
                <li>
                  <button>Desktops</button>
                </li>
                <li>
                  <button>Monitors</button>
                </li>
                <li>
                  <button>Keyboards & Mouse</button>
                </li>
                <li>
                  <button>Tablets</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Gaming</h2>
                </li>
                <li>
                  <button>PS5 Games</button>
                </li>
                <li>
                  <button>XBOX Games</button>
                </li>
                <li>
                  <button>Nintendo</button>
                </li>
                <li>
                  <button>Collectibles</button>
                </li>
                <li>
                  <button>PC Gaming</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Cameras & Drones</h2>
                </li>
                <li>
                  <button>Lenses</button>
                </li>
                <li>
                  <button>Compact Cameras</button>
                </li>
                <li>
                  <button>High-Perfomance Cameras</button>
                </li>
                <li>
                  <button>Security Cameras</button>
                </li>
                <li>
                  <button>Drones</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>TVs</h2>
                </li>
                <li>
                  <button>Tv Accessories</button>
                </li>
                <li>
                  <button>Media Streaming</button>
                </li>
                <li>
                  <button>OLED TVs</button>
                </li>
                <li>
                  <button>Antennas</button>
                </li>
                <li>
                  <button>Cables</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Music</h2>
                </li>
                <li>
                  <button>Vinyl</button>
                </li>
                <li>
                  <button>CD</button>
                </li>
                <li>
                  <button>DVDs & Blu-rays</button>
                </li>
                <li>
                  <button>Accessories</button>
                </li>
                <li>
                  <button>New Releases</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Mobile Phones</h2>
                </li>
                <li>
                  <button>iPhones</button>
                </li>
                <li>
                  <button>Android</button>
                </li>
                <li>
                  <button>Huawei</button>
                </li>
                <li>
                  <button>Walkie Talkies</button>
                </li>
                <li>
                  <button>Phone Accessories</button>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button>Collectibles and Art</button>
            <div className="dropdown-menu-apparel">
              <ul className="drop-1">
                <li>
                  <h2>Antiques</h2>
                </li>
                <li>
                  <button>Silver</button>
                </li>
                <li>
                  <button>Asian Antiques</button>
                </li>
                <li>
                  <button>Furniture</button>
                </li>
                <li>
                  <button>Architectural & Garden</button>
                </li>
                <li>
                  <button>Primitive</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Art</h2>
                </li>
                <li>
                  <button>Paintings</button>
                </li>
                <li>
                  <button>Art Prints</button>
                </li>
                <li>
                  <button>Art Photographs</button>
                </li>
                <li>
                  <button>Art Posters</button>
                </li>
                <li>
                  <button>Art Sculptures</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Action Figures</h2>
                </li>
                <li>
                  <button>Action Figures</button>
                </li>
                <li>
                  <button>Playsets</button>
                </li>
                <li>
                  <button>Mixed Lots</button>
                </li>
                <li>
                  <button>Supplies & Storage</button>
                </li>
                <li>
                  <button>Action Figures Accessories</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Comics</h2>
                </li>
                <li>
                  <button>Original Comic Art</button>
                </li>
                <li>
                  <button>Graphic Novels</button>
                </li>
                <li>
                  <button>Marvel</button>
                </li>
                <li>
                  <button>DC</button>
                </li>
                <li>
                  <button>Manga Comics</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Cards</h2>
                </li>
                <li>
                  <button>CCG Individual Cards</button>
                </li>
                <li>
                  <button>CCG Sealed Boxes</button>
                </li>
                <li>
                  <button>Mixed Card Lots</button>
                </li>
                <li>
                  <button>CCG Sealed Decks</button>
                </li>
                <li>
                  <button>Other CCG Items</button>
                </li>
              </ul>

              <ul className="drop-1">
                <li>
                  <h2>Funko Pop</h2>
                </li>
                <li>
                  <button>Exclusive</button>
                </li>
                <li>
                  <button>Vaulted</button>
                </li>
                <li>
                  <button>Anime</button>
                </li>
                <li>
                  <button>Marvel</button>
                </li>
                <li>
                  <button>DC</button>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button>
              <a className="feature-anchor" href="/browse">
                Features
              </a>
            </button>
          </li>
        </ul>
      </div>

      {component}
    </div>
  );
};

export default Browse;
