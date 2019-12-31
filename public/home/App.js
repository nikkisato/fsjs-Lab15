import Component from '../Component.js';
import Header from '../common/Header.js';

class App extends Component {
    
  onRender(dom) {
    const header = new Header();
    dom.prepend(header.renderDOM());
  }

  renderHTML() {
    return /*html*/`
        <div>
            <!-- header goes here --> 
            <main>
                <p>
                    <img
                        class="cover"
                        src="<find a nice book image"
                        alt="something descriptive, please."
                    > 
                </p>
            </main>
        </div>      
        `;
  }
        
}

export default App;
