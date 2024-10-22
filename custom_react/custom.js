
function custom_Render(Reactelement,maincontainer){
   
    const domElement=document.createElement(Reactelement.type)
    domElement.innerHTML=Reactelement.children
    for(const p in Reactelement.props)
    {
        if(p==='children')continue;
        domElement.setAttribute(p,Reactelement.props[p])
    }
    maincontainer.appendChild(domElement)
}
const Reactelement ={

    type: 'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click on me for visiting google'
}

const maincontainer=document.querySelector('#root')

custom_Render(Reactelement,maincontainer)