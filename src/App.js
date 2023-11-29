import React, { useEffect }  from 'react';
import Prism from 'prismjs';

import Button from './components/Button/Button';
import Scenario from './components/Scenario';

import './prism.css';
import './App.css';

function App() {

    useEffect(() => {
        Prism.highlightAll();
      }, []);

    return (
        <div className="App">

            <Scenario
                component={<Button text="Submit" onClick={() => {}} />}
                description={
                    <ul>
                        <p>Use <code>queryByText</code> and <code>getByText</code> to select a node and assert its presence.</p>
                        <p>Use <code>rerender</code> to test with different props.</p>
                        <p>Use <code>jest.fn</code> to mock functions.</p>
                        <p>Use <code>fireEvent.click</code> to simulate click events.</p>
                    </ul>
                }
                title="Testing a Controlled Component"
            />

        </div>
    );
}

export default App;
