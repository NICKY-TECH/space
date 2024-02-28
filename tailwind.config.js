/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobileCrewBg":
          "url('/src/resources/images/crew/background-crew-mobile.jpg')",
        "desktopCrewBg":
          "url('/src/resources/images/crew/background-crew-desktop.jpg')",
        "tabletCrewBg":
          "url('/src/resources/images/crew/background-crew-tablet.jpg')",
        "ansariPerson":
          "url('/src/resources/images/crew/image-anousheh-ansari.png')",
        "douglasPerson":
          "url('/src/resources/images/crew/image-douglas-hurley.png')",
        "hurleyPerson":
          "url('/src/resources/images/crew/image-douglas-hurley.png')",
        "victorPerson": "url('/src/resources/images/crew/image-victor-glover.png')",
        "desktopDestinationBg":
          "url('/src/resources/images/destination/background-destination-desktop.jpg')",
        "mobileDestinationBg":
          "url('/src/resources/images/destination/background-destination-mobile.jpg')",
        "tabletDestinationBg":
          "url('/src/resources/images/destination/background-destination-tablet.jpg')",
        "europa": "url('/src/resources/images/destination/image-europa.png')",
        "marsPlanet": "url('/src/resources/images/destination/image-mars.png')",
        "moon": "url('/src/resources/images/destination/image-moon.png')",
        "titan": "url('/src/resources/images/destination/image-titan.png')",
        "desktopHomeBg":"url('/src/resources/images/home/background-home-desktop.jpg')",
        "mobileHomeBg":"url('/src/resources/images/home/background-home-mobile.jpg')",
        "tabletHomeBg":"url('/src/resources/images/home/background-home-tablet.jpg')",
       "desktopTechnologyBg":"url('/src/resources/images/technology/background-technology-desktop.jpg')",
       "mobileTechnologyBg":
          "url('/src/resources/images/technology/background-technology-mobile.jpg')",
     "tabletTechnologyBg":
          "url('/src/resources/images/technology/background-technology-tablet.jpg')",
        "vehicleLandScape":
          "url('/src/resources/images/technology/image-launch-vehicle-landscape.jpg')",
        "vehiclePortrait":
          "url('/src/resources/images/technology/image-launch-vehicle-portrait.jpg')",
        "spaceLandScape":
          "url('/src/resources/images/technology/image-spaceport-landscape.jpg')",
        "spacePortrait":
          "url('/src/resources/images/technology/image-spaceport-portrait.jpg')",
      },
      colors: {
        dilute: "#D0D6F9",
        stroke: "#979797",
        bgColor: "#0B0D17",
      },
      fontFamily:{
        "Bellefair":["Bellefair"]
      }
    },
  },
  plugins: [],
};
