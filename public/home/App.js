import Component from '../Component.js';
import Header from '../common/Header.js';
import Signup from './Signup.js';
import Login from './Login.js';


class App extends Component {
    
  onRender(dom) {
    fetch('/api/v1/auth/verify', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(user => {
        if(user._id) window.location.href = '/bookkeep.html';
      });

    const header = new Header();
    dom.prepend(header.renderDOM());

    // const signUpContainer = dom.querySelector('#signup-container');
    // const logInContainer = dom.querySelector('#login-container');

    const signUp = new Signup();
    dom.appendChild(signUp.renderDOM());

    const logIn = new Login();
    dom.appendChild(logIn.renderDOM());

    //   const switchToLogIn = dom.querySelector('#login-button');
    //   switchToLogIn.addEventListener('click', () => {
    //     logInContainer.classList.remove('no-display');
    //     signUpContainer.classList.add('no-display');
    //   });

  }

  renderHTML() {
    return /*html*/`
        <div>
            <!-- header goes here --> 
            <main>
                <p class="erorrs"></p>
                <section class="switch">
                  <p class="switch">
                    <button id="login-button">Already a user?</button>
                  </p>
                </section>
                <section id="login-container">
                <p class="switch">
                  <button id="signup-button">Need to create and account?</button>
                </p>
                </section>
                <p>
                <img class="cover" src="../assets/home-page.jpg" alt="cozy reading nook">
                </p>
            </main>
        </div>      
        `;
  }
        
}

export default App;
