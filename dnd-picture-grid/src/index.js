import React from 'react';
import ReactDOM from 'react-dom';
import {DnDProvider} from 'reat-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './index.css';
import App from './Components/App/App';
import GridProvider from './Components/GridProvider/GridProvider'

ReactDOM.render(
    <DnDProvider backend={HTML5Backend}>
        <GridProvider>
            <App />
        </GridProvider>
    </DnDProvider>,
    document.getElementById("root")
);

