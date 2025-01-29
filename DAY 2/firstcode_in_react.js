const element = React.createElement('h1',{},"Hellow coder Army")
// const root = document.getElementById('root') :- deprecate use in react 2017 this because while the rendering the large data user click on any button then the immidiate listening of the button is not started this will wait until page fully get load 


// ReactDOM.render(element,root) :- it is deprecated 

const root = ReactDOM.createRoot(document.getElementById('root')) // this will tell that now render is handle by react and now while renderin the user can able to click on button and fastly go on second page
root.render(element);



