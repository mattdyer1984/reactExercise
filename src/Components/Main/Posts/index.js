import "./posts.css"
import { useState } from "react"

function Posts() {
    const [likeClick, setLikeClick] = useState(0)
    const [dislikeClick, setDislikeClick] = useState(0)
    const [lKAClick, setLKAClick] = useState(0)
    function handleclicks() {
        setLikeClick(likeClick +1)
        }
    function handleclicks1() {
        setDislikeClick(dislikeClick +1)
    }
        function handleclicks2() {
            setLKAClick(lKAClick +1)
        }
 return (
        <div className="posts">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue. Venenatis tellus in metus vulputate.In iaculis nunc sed augue. Venenatis tellus in metus vulputate. In iaculis nunc sed augue. Venenatis tellus in metus vulputate.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue. Venenatis tellus in metus vulputate.In iaculis nunc sed augue. Venenatis tellus in metus vulputate. In iaculis nunc sed augue. Venenatis tellus in metus vulputate.  
            </p>
            <div className="buttons">
            <button className="likebutt" onClick={handleclicks}>Like({likeClick})</button>
            <button className="likebutt" onClick={handleclicks1}>Dislike({dislikeClick})</button>
            <button className="likebutt" onClick={handleclicks2}>Low Key Agreee({lKAClick})</button>
            </div>

        </div>
    )
}
export default Posts