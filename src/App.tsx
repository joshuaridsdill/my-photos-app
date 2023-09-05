import React, { Component } from 'react';
import { Collage, CollageRow } from './Components/Collage/Collage'
import Photo from './Components/Photo/Photo';
import Modal from './Components/Modal/Modal'
import Booty from "./Photos/2840997556.jpg";
import Boobs from "./Photos/2754671323.jpg";
import Face from "./Photos/2699633135.jpg";
import './App.css';

type AppProps = {
}

type AppState = {
  isPhotoClicked: boolean;
  imageToRender: any;
}

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      isPhotoClicked: false,
      imageToRender: null
    };
  }

  handlePhotoClick(image: any) {
    this.setState({ isPhotoClicked: true,  imageToRender: image});
    console.log("HEY")
  }

  handleModalClose() {
    this.setState({ isPhotoClicked: false});
  }

  render(): React.ReactNode {

    const { isPhotoClicked, imageToRender } = this.state;

    function getImagePaths(): string[] {
      const imageFolder = './Photos';
      const imagePaths: string[] = [];

      // Read the contents of the image folder
      // @ts-ignore
      const images = require.context('./Photos', false, /\.(png|jpe?g|gif|svg)$/);
      images.keys().forEach((imagePath: string) => {
        const formatImagePath = imagePath.substring(2);
        imagePaths.push(`${formatImagePath}`);
      });

      return imagePaths;
    }

    const imagePaths = getImagePaths();
    console.log(imagePaths[Math.floor(Math.random() * 1501) + 0]);

    // const photos = [require(`./Photos/${imagePaths[Math.floor(Math.random() * 1501) + 0]}`), require(`./Photos/${imagePaths[Math.floor(Math.random() * 1501) + 0]}`)]

    let photos = [];

    for (let i = 0; i < 30; i++) {
      photos.push(require(`./Photos/${imagePaths[Math.floor(Math.random() * 1501) + 0]}`))
    }

    // const photos = [require("./Photos/1026133819.jpg"), require("./Photos/1043948111.jpg")];

    return (
      <div className="App">

        {/* <Collage maxRowItemsCount={3}>
          <CollageRow>
            <Photo src={Booty} alt="rose477" onPhotoClick={() => console.log("Hey")} />
            <Photo src={Boobs} alt="rose477" onPhotoClick={() => console.log("Hey")} />
            <Photo src={Face} alt="rose477" onPhotoClick={() => console.log("Hey")} />
          </CollageRow>
          <CollageRow>
            <Photo src={Booty} alt="rose477" onPhotoClick={() => console.log("Hey")} />
            <Photo src={Boobs} alt="rose477" onPhotoClick={() => console.log("Hey")} />
            <Photo src={Face} alt="rose477" onPhotoClick={() => console.log("Hey")} />
          </CollageRow>
          <CollageRow>
            <Photo src={Booty} alt="rose477" onPhotoClick={() => console.log("Hey")} />
            <Photo src={Boobs} alt="rose477" onPhotoClick={() => console.log("Hey")} />
            <Photo src={Face} alt="rose477" onPhotoClick={() => console.log("Hey")} />
          </CollageRow>
          <CollageRow>
            <Photo src={Booty} alt="rose477" onPhotoClick={() => console.log("Hey")} />
            <Photo src={Boobs} alt="rose477" onPhotoClick={() => console.log("Hey")} />
            <Photo src={Face} alt="rose477" onPhotoClick={() => console.log("Hey")} />
          </CollageRow>
          <CollageRow>
            <Photo src={Booty} alt="rose477" onPhotoClick={() => console.log("Hey")} />
            <Photo src={Boobs} alt="rose477" onPhotoClick={() => console.log("Hey")} />
            <Photo src={Face} alt="rose477" onPhotoClick={() => console.log("Hey")} />
          </CollageRow>
        </Collage> */}

        {isPhotoClicked && <Modal onModalClose={() => this.handleModalClose()}><img src={imageToRender} alt="Zoomed image"/></Modal>}

        <Collage maxRowItemsCount={3}>
          {photos.map((photo, index) => (
            <Photo src={photo} alt='rose477' onPhotoClick={() => this.handlePhotoClick(photo)} />
          ))}
        </Collage>
      </div>
    );
  }
}

export default App;
