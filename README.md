<h1>Food Order App</h1>
<h2>Introduction</h2>
<div>
  <img alt="React Native" src="https://github.com/chetankumarpulipati/mynotesapp/blob/main/react%20native.svg"/>
  <img alt="Node.js" src="https://github.com/chetankumarpulipati/mynotesapp/blob/main/react.svg"/>
</div>
<h3>What is React Native?</h3>
<p>React Native is a popular open-source framework created by Meta (formerly Facebook) that allows you to build mobile applications for iOS and Android using JavaScript.</p>
<h3>Why React Native?</h3>
<p>
  <ul><b>1. Cross-Platform Development:</b> Write once, run anywhere. React Native lets you build iOS and Android apps using a single JavaScript codebase, saving time and money.</ul>
  <ul><b>2. Leverage JavaScript Expertise:</b> If your team knows JavaScript, React Native lets them build mobile apps with less need to learn new languages.</ul>
  <ul><b>3. Native-Like Performance:</b> React Native apps feel like native apps, ensuring a smooth and responsive user experience.</ul>
  <ul><b>4. Rich UI Component Library:</b> React Native provides a vast collection of pre-built UI components for common app elements, saving development time.</ul>
  <ul><b>5. Native Code Integration:</b> Extend functionality with native modules written in Java/Swift/Objective-C for platform-specific features.</ul>
  <ul><b>6. Large Community and Support:</b> React Native's large community provides extensive resources and support for a smoother development experience.</ul>
  <ul><b>7. Faster Development:</b> React Native's code reusability and pre-built components can accelerate development compared to native app development.</ul>
  <ul><b>8. Cost-Effective:</b> React Native can reduce development costs by using a single codebase for both iOS and Android.</ul>
</p>
<h3>Working of React Native</h3>
<p>
  React Native lets you build mobile apps with JavaScript and React, but under the hood it uses multiple threads to communicate between JavaScript and native code. A "bridge" translates messages between them.
  When you launch the app, the JavaScript code runs in its own thread and builds the UI. User interactions are relayed back to JavaScript, which can update the app's state and trigger UI changes. This two-way
  communication between JavaScript and native threads allows React Native to create mobile apps that feel native while leveraging the familiarity and speed of JavaScript development. 
</p>
<h2>Requirements</h2>
<p>
  <ul>1. NPM - Node Package Manager</ul>
  <ul>2. React Native CLI</ul>
</p>
<h2>How to run the app?</h2>
<p>
  <ul>1. Clone the Repository</ul>
    <ul>
    <div class="zeroclipboard-container">
    <pre class="notranslate"><code>git clone https://github.com/chetankumarpulipati/food-order-app.git</code></pre>
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data
      tooltip direction="w" value="git clone https://github.com/chetankumarpulipati/food-order-app.git" tabindex="0" role="button">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.
              1.75 0 0 1 0 14.25Z"></path>
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 
              .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
        </svg>
    </clipboard-copy>
    </div>
    </ul>
    <ul>2. Open any IDE or cmd</ul>
    <ul>3. Navigate to extracted repository folder and run</ul>
    <ul>
       <div class="zeroclipboard-container">
    <pre class="notranslate"><code>npm install</code></pre>
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data
      tooltip direction="w" value="git clone https://github.com/chetankumarpulipati/food-order-app.git" tabindex="0" role="button">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.
              1.75 0 0 1 0 14.25Z"></path>
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 
              .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
        </svg>
    </clipboard-copy>
    </div>
    </ul>
    <ul>4. Now type in cmd</ul>
    <ul>
      <div class="zeroclipboard-container">
    <pre class="notranslate"><code>react-native run-android</code></pre>
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data
      tooltip direction="w" value="git clone https://github.com/chetankumarpulipati/food-order-app.git" tabindex="0" role="button">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.
              1.75 0 0 1 0 14.25Z"></path>
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 
              .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
        </svg>
    </clipboard-copy>
    </div>
    </ul>
    <ul>5. Change backend url and modify according to your ip and port</ul>
    <ul>6. Open new terminal and run: </ul>
    <ul>
      <div class="zeroclipboard-container">
    <pre class="notranslate"><code>node server.js</code></pre>
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data
      tooltip direction="w" value="git clone https://github.com/chetankumarpulipati/mynotesapp.git" tabindex="0" role="button">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.
              1.75 0 0 1 0 14.25Z"></path>
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 
              .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
        </svg>
    </clipboard-copy>
    </div>
    </ul>
    <h2>Screenshots</h2>
    <br><img alt="App Screenshot" src="./src/screenshots/Screenshot_20240605_160648_foodorder.jpg" width="300" height="300"></br>
    <br><img alt="App Screenshot" src="./src//screenshots/Screenshot_20240605_160652_foodorder.jpg"></br>
    <br><img alt="App Screenshot" src="./src/screenshots/Screenshot_20240605_160702_foodorder.jpg"></br>
    <br><img alt="App Screenshot" src="./src/screenshots/Screenshot_20240605_160708_foodorder.jpg"></br>
    <br><img alt="App Screenshot" src="./src/screenshots/Screenshot_20240605_160712_foodorder.jpg"></br>
    <br><img alt="App Screenshot" src="./src//screenshots/Screenshot_20240605_160826_foodorder.jpg"></br>
</p>
<h2>Authors</h2>
<p>&bull;&nbsp;<a href="https://www.linkedin.com/in/chetan-kumar-b4388926b/" target="_blank">Chetan Kumar Pulipati</a></p>

