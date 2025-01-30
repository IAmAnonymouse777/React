                                                                    //       |-> here we specify the style in the object form  
                                                                    //       |        
const element = React.createElement('h1',{id:"first", className:"rahul", style:{backgroundColor : "blue" , fontSize : `30px` , color :"pink"}},"Hellow coder Army")
                                            //            |
                                            //            |-> we can specify the properties of element here here for class name insted of using class keyword that is reserved in javascript we use the className 

const element2 = React.createElement('h2',{id:"second", className:"Yogesh", style:{backgroundColor : "black" , fontSize : `30px` , color :"pink"}},"maja aaya bhai JS padhake")

const container = React.createElement('div',{id:'container'},[element,element2])// now this line means that one div contain two element element 1 and element 2 and now we are gonna render this div
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(element); // this is only render one element and when we try to add another one this will ignore the old element and only render the new element , this will ignore the element which is added in root from HTML file directly , this mean its clear all priviouse child 
root.render(element2); 
root.render(container)

// Solution for Above problem
// so we need to create the container Or div which contain resquired element and we gonna render the that specific container 
/*
            <div id ="Info">  :- we are render this 
               <h1>Hellow Coder Army</h1> insted of this
               <h2>maja aaya mujhe</h2>
            </div>
*/



/*
 now suppose we wanna create the below structure using above its complicated isnt it ? 
 JSX :- for this we use the JSX for complicated structure . we simply write the code like html and jsx will convert it automatically into React
 JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like. It allows you to write HTML-like code inside JavaScript, making it easier to create and structure React components.
 we learn the JSX in next time .


<div>
    <div>
        <h1>
            <p>
                
            </p>
        </h1>
    </div>
</div>
 
the above code is not optimised because we use the external link for react so this is not optimised code
we need to use the bundler for optimised and production level code 
In our project react we use the parcel for bundler 

Parcel
Parcel is a fast, zero-config build tool for web applications. It is often used as a bundler for JavaScript, HTML, CSS, and assets like images.

Why Use Parcel?
✅ Zero Configuration – No need for complex setup like Webpack.
✅ Super Fast – Uses multi-core processing for quick builds.
✅ Hot Module Replacement (HMR) – Automatically updates changes without refreshing the page.
✅ Tree Shaking – Removes unused code to optimize performance.
✅ Code Splitting – Splits code into smaller chunks for faster loading.
✅ Supports Many File Types – Works with JS, TypeScript, JSX, SCSS, images, etc.

Installing Parcel
To install Parcel globally, run:

npm install -g parcel-bundler
Or for a specific project:

npm install parcel --save-dev
Using Parcel in a Project
1️⃣ Create an HTML file (index.html):


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parcel App</title>
</head>
<body>
    <script src="./index.js"></script>
</body>
</html>
2️⃣ Create a JavaScript file (index.js):


console.log("Hello from Parcel!");
3️⃣ Run Parcel Start the development server:


npx parcel index.html
This will automatically bundle everything and start a local server.

Building for Production
To create an optimized build:


npx parcel build index.html
Parcel will minify files, remove unused code, and generate an optimized dist/ folder.

When Should You Use Parcel?
When you want fast and easy setup for a project.
When working with React, Vue, or Vanilla JS without complex configurations.
When you need fast builds with hot reloading.




what is NPM
NPM (Node Package Manager)
NPM (Node Package Manager) is the default package manager for Node.js. It is used to install, manage, and share JavaScript libraries and dependencies in a project.

Why Use NPM?
✅ Manages Dependencies – Install and update packages easily.
✅ Huge Library – Access to thousands of open-source packages.
✅ Version Control – Keep track of package versions.
✅ Easy Scripts – Run custom scripts like start, build, and test.

Installing NPM
NPM comes bundled with Node.js.
🔹 Check if Node.js & NPM are installed:


node -v   # Check Node.js version
npm -v    # Check NPM version
🔹 Download & Install Node.js (includes NPM):
👉 https://nodejs.org

Basic NPM Commands
1️⃣ Initialize a Project (package.json)

npm init
This command creates a package.json file where dependencies and project metadata are stored.
Use npm init -y for quick setup (skips manual configuration).

2️⃣ Install Packages

npm install package-name
Example:


npm install express
For development dependencies (not needed in production):

npm install package-name --save-dev
3️⃣ Install All Dependencies

npm install
If a project has a package.json file, this command installs all required dependencies.

4️⃣ Uninstall a Package

npm uninstall package-name
5️⃣ Update a Package

npm update package-name
6️⃣ Run Scripts
Inside package.json, scripts can be defined:


"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
Run with:


npm run start
npm run dev
What is package.json?
This file stores project metadata and dependencies. Example:


{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
What is package-lock.json?
This file locks the installed package versions to ensure consistency across environments.

What is node_modules/?
This folder contains all installed dependencies.
It should not be pushed to GitHub—use a .gitignore file.

Global vs Local Packages
Local: Installed inside a project (default).

npm install package-name
Global: Installed system-wide.

npm install -g package-name
Alternatives to NPM
Yarn – Faster package manager by Facebook.
PNPM – Efficient and disk-space-friendly.
*/

