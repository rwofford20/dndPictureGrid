import React, {useContext} from 'react';
import DragItem from '../DragItem/DragItem';
import {Grid, GridImage, GridItem} from '../Grid/Grid';
import GridContext from '../GridProvider/GridProvider';
import './App.css'

function App() {
    const {items, moveItem} = useContext(GridContext);

    return (
        <div className="App">
            <Grid>
                {console.log('Inside Grid' + items[0].id)}
                {items.map( item => (
                    <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
                        <GridItem>
                            <GridImage src={item.src}></GridImage>
                        </GridItem>
                    </DragItem>
                ))}
            </Grid>
        </div>
    );
}

export default App;
