// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Link,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  mappingworkflow: require("../assets/mappingworkflow.png"),
  tiles: require("../assets/tiles.jpg"),
  plp: require("../assets/plp.png"),
  components: require("../assets/components.png"),
  mapbot: require("../assets/mapbot.png")
};

preloader(images);

const theme = createTheme({
  primary: "rgb(34,34,64)",
  secondary: "rgb(255,255,255)",
  tertiary: "rgb(43,173,187)",
  quartenary: "rgb(89,226,158)"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src="https://s3.amazonaws.com/mapper-logos/mapbot-msg.png"></Image>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            MapperKeeper
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Up Our Skirt
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            2 Libraries
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Mapper - Keeper
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Mapper
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Mapping Library
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <Image src={images.mappingworkflow.replace("/", "")} target='_blank'></Image>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <CodePane lang="jsx" source={require("raw-loader!../assets/mapper.example")} margin="20px auto"></CodePane>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.tiles.replace("/", "")} width="80%" target='_blank'></Image>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Basemap Providers
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Google, Bing, Mapbox, Esri, Here, Stamen, OSM...
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.plp.replace("/", "")} width="80%" target='_blank'></Image>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            GeoJSON
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={2} fit bold>
            a format for encoding a variety of geographic data structures
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Proprietary Mapping Libraries
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={2} fit bold>
            Google Maps API, Bing Maps API, Esri JS API...
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Open Mapping Libraries
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={2} fit bold>
            Leaflet, Open Layers
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={2} fit>
            DOM vs CANVAS
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <CodePane lang="jsx" source={require("raw-loader!../assets/tilesource.example")} margin="20px auto"></CodePane>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="tertiary">
            Modular
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={2} fit>
            Logic and UI
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="tertiary">
            ES2015
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={2} fit>
            arrow functions, classes, modules, constants...
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <CodePane lang="jsx" source={require("raw-loader!../assets/module.example")} margin="20px auto"></CodePane>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="tertiary">
            NPM
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={2} fit>
            load external dependencies
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <CodePane lang="jsx" source={require("raw-loader!../assets/package.example")} margin="20px auto"></CodePane>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="tertiary">
            ReactJS
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={2} fit>
            JS Library for Building User Interfaces
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.components.replace("/", "")} width="80%" target='_blank'></Image>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="tertiary">
            GULP
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={2} fit>
            ES2015 to JS, Minify CSS, Uglify JS, Etc
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Keeper
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Server Side App
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Ruby on Rails
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <List>
            <ListItem>Good Documentation</ListItem>
            <ListItem>Lots of Ruby Gems</ListItem>
            <ListItem>Easily Deploy to Heroku</ListItem>
            <ListItem>Active Job, Turbolinks, Asset Pipeline</ListItem>
            <ListItem>Database Migrations</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            DevOps
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Heroku
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Who Has The Time?
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Review Apps
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Merge Request Automatically Builds Review App
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Data Clips
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Share SQL Query Results Easily
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Lessons Learned
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Release Early, Often.  Weekly Hangouts.  Marathon Not Sprint.
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <Image src={images.mapbot.replace("/", "")} height="250px"></Image>
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Questions?
          </Heading>
        </Slide>

      </Deck>
    );
  }
}
