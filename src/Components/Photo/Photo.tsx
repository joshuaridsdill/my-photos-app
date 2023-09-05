import React, { Component } from 'react';
import './Photo.css'

type PhotoProps = {
    src: string;
    alt: string;
    onPhotoClick: () => void;
};

type PhotoState = {
    randomImageUrl: string;
}

function getImagePaths(): string[] {
    const imageFolder = '../../Photos'; // Relative path to the image folder
    const imagePaths: string[] = [];

    // Read the contents of the image folder
    // @ts-ignore
    const images = require.context('../../Photos', false, /\.(png|jpe?g|gif|svg)$/);
    images.keys().forEach((imagePath: string) => {
        const formatImagePath = imagePath.substring(2);
        imagePaths.push(`${formatImagePath}`);
    });

    return imagePaths;
}

const imagePaths = getImagePaths();
console.log(imagePaths[Math.floor(Math.random() * 1501) + 0]);

class Photo extends Component<PhotoProps> {

    render(): React.ReactNode {
        const { src, alt, onPhotoClick } = this.props;

        return (
            <div className='Photo-Container' onClick={onPhotoClick} style={{ width: '500px', height: '500px' }}>
                <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        );
    }
}

export default Photo;
