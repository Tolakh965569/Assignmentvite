
import"./Tag.css";
const Tag = ({tagname,selectTag,selectd}) =>{
    //console.log("tag props",props)

    const tagstyle ={
      HTML: {backgroundColor: "red"},
      CSS: {backgroundColor: "green"},
      React: {backgroundColor: "Orange"},
      javaScript: {backgroundColor: "yellow"},

      default: {backgroundColor: "#f9f9f9"}
    }
    return(
        <button type="button" style={selectd ?tagstyle[tagname] : tagstyle.default} className="tag" 
        onClick={() =>selectTag(tagname)}>
        {tagname}</button>
    );
}
export default Tag;