import React from 'react';
import paintings from './paintings.json'
import PaintingList from './components/PaintingList'

import Panel from './components/Panel'

const App  = () => {
    return <div>
        <h1>Warehouse</h1>

        <Panel title='Last news'>
            <p>Hallo</p>
        </Panel>

        <Panel>
            <p>Buy</p>
            <p>
                Lorem ipsum dolor sit
            </p>
        </Panel>

        <PaintingList items={paintings} />

        {/* <Painting 
        url={paintings[0].url}
        title={paintings[0].title}
        authorUrl={paintings[0].author.url}
        tag={paintings[0].author.tag}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
        />

        <Painting 
        url={paintings[1].url}
        title={paintings[1].title}
        authorUrl={paintings[1].author.url}
        tag={paintings[1].author.tag}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
        />

        <Painting 
        url={paintings[2].url}
        title={paintings[2].title}
        authorUrl={paintings[2].author.url}
        tag={paintings[2].author.tag}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
        /> */}
    </div>
}

export default App;

