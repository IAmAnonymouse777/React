// react is javascript library
// jo kaam react se hota hai vai  kaam apan react use karke karte hai
// the different is the making the task is so simple.
// Now we below show the exact representation how react works in JS

// create element through JS
// const header1 = document.createElement('h1')
// header1.innerHTML='Hellow coder army'
// header1.style.backgroundColor='blue';
// header1.style.fontSize='30px';
// header1.style.color='white';

// const header2 = document.createElement('h1')
// header2.innerHTML='Hellow coder army'
// header2.style.backgroundColor='black';
// header2.style.fontSize='25px';
// header2.style.color='white';


// const header3 = document.createElement('h1')
// header3.innerHTML='Hellow coder army3'
// header3.style.backgroundColor='pin3';
// header3.style.fontSize='25px';
// header3.style.color='white';

// when writing the above code we understand that we need the copy and paste code as much as required now suppose we need the 1000 header to be created now 
// how to tacle that situation we can use the function 




const root = document.getElementById('root');
// root.appendChild(header1)
// root.appendChild(header2)
// root.appendChild(header3)



const  react = {
    createElement : function createElement(tag,styles,children){
       
       const element = document.createElement(tag);
       if(typeof children === 'object')
       {
            for (const val of children) {
                element.appendChild(val)
            }
       }
       else{
        element.innerHTML=children;
   
       }
       for (const key  in styles) {
        element.style[key] = styles[key];
     } 
     return element;
      
    }
}

const reactDom = {
    render : function createDom (parent,appendele){

        appendele.forEach(element => {
            parent.appendChild(element)
        });
    }
}
const header1 = react.createElement('h1',{fontSize:"30px", backgroundColor :"blue" , color :"white" },'Hellow from yogesh');
const header2 = react.createElement('h2',{fontSize:"50px", backgroundColor :"red" , color :"white" },'Hellow from coderArmy');
const header3 = react.createElement('h3',{fontSize:"40px", backgroundColor :"brown" , color :"white" },'kaise ho aaplog');

reactDom.render(root,[header1,header2,header3]);

// now create the Unorderlist using the above code 
const li1 = react.createElement('li',{},'Git')
 const li2 = react.createElement('li',{},'Github')
 const li3 = react.createElement('li',{},'CSS')
 const li4 = react.createElement('li',{},'JS')
 const ul = react.createElement('ul',{},[li1,li2,li3,li4]);
 
 reactDom.render(root,[ul]);

