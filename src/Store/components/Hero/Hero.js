import React from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./hero.module.css";
import "react-responsive-carousel/lib/styles/carousel.css";

export default function Hero() {
  return (
    <Carousel
      className={classes.sliderWrapper}
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
    >
      <div className={classes.heroImg}>
        <img
          src="https://wallpapershome.ru/images/wallpapers/aston-martin-2560x1440-4k-hd-koncept-superkar-2070.jpg"
          alt="heroSlider"
        />
      </div>
      <div className={classes.heroImg}>
        <img
          src="https://hdwallpapermarket.com/wp-content/uploads/2021/03/Mac-Wallpaper-4K-Cars-Trick-scaled.jpg"
          alt="heroSlider"
        />
      </div>
      <div className={classes.heroImg}>
        <img
          src="https://wallpaperaccess.com/full/13642.jpg"
          alt="heroSlider"
        />
      </div>
    </Carousel>
  );
}
