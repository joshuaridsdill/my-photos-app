import React, { Component, ReactNode } from 'react';
import './Collage.css'

type Props = {
    children: ReactNode;
}

type CollageProps = {
    maxRowItemsCount: number;
}

class Collage extends Component<CollageProps & Props> {

    handlePhotoClick = () => {
        console.log("Hey");
    };

    render(): React.ReactNode {
        const { maxRowItemsCount } = this.props;

        const childrenArray = React.Children.toArray(this.props.children);

        const collageRows = [];
        for (let i = 0; i < childrenArray.length; i += maxRowItemsCount) {
            const rowChildren = childrenArray.slice(i, i + maxRowItemsCount);
            collageRows.push(<CollageRow maxRowItemsCount={maxRowItemsCount}>{rowChildren}</CollageRow>);
        }

        return (
            <div className='Collage-Container'>
                {/* {React.Children.map(this.props.children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, maxRowItemsCount);
                    }
                    return child;
                })} */}
                {collageRows}
            </div>
        );
    }
}

type CollageRowProps = {
    maxRowItemsCount: number;
}

class CollageRow extends Component<CollageRowProps & Props> {
    render(): React.ReactNode {
        return (
            <div className='CollageRow-Container'>
                {this.props.children}
            </div>
        );
    }
}

export { Collage, CollageRow };
