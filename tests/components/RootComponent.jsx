import React from 'react';

import { GalleryComponent } from '../../src/components/GalleryComponent.jsx';

import DATA_SOURCE from '../../src/sources/dataSource';

export default class RootComponent extends React.Component {

    render() {
        return <GalleryComponent slides={DATA_SOURCE} />;
    }
}