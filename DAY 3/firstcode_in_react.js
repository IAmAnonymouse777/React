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
*/