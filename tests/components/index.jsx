import React from 'react';
import ReactDOM from 'react-dom';

import RootComponent from './RootComponent.jsx';

const InitWrapper = () => {
    ReactDOM.render(
        <RootComponent />,
        document.getElementById('GalleryExample')
    );
};

InitWrapper();
