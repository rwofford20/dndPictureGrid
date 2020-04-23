import React from 'react';
import ReactDOM from 'react-dom';
import {DndProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './index.css';
import App from './Components/App/App';
import {GridProvider} from './Components/GridProvider/GridProvider'

ReactDOM.render(
    <DndProvider backend={HTML5Backend}>
        <GridProvider>
            <App />
        </GridProvider>
    </DndProvider>,
    document.getElementById("root")
);

