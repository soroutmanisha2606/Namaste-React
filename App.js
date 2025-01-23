/**
 * <div>
 * <div>
 *      <h1> Nested Objects </h1>
 * </div>
 * <div>
 */
const parent = React.createElement('div',{},React.createElement('div',{},[React.createElement('h1',{},"H1 insid ethe nestred obj"),React.createElement('h2',{},'H2 inside the nested')]))
const heading = React.createElement('h1',{id:'heading'},"Hello React and using CDN Links ");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)