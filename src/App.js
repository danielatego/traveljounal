import "./style.css";
import Nav from "./components/nav";
import Card from "./components/card";
import content from "./components/content";
 
 export default function App() {
    var collection;
    collection = content.map(item=>{
        return<Card
            {...item}/>
        
    })
console.log(collection)
    return(
        <div>
            <Nav/>
        
            {collection}
            
        </div>
    )
}