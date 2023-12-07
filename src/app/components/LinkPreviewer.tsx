"use client"
import {useState} from "react"

type LinkPreviewrProps = {
    url: string;
    children: React.ReactNode
}

const LinkPreviewer: React.FC<LinkPreviewrProps> = ({ url, children }) =>
{

    const [isHovering, setIsHovering] = useState<boolean>(false)
    
    const handleMouseEnter = () => { setIsHovering(true)}
    const handleMouseLeave = () => {setIsHovering(false)}
  return (
    <div onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
          <span className="children">{children}</span>
          {isHovering && (
              <div style={{ position: 'absolute', width: '500px', height: '200px', border: '1px solid black', cursor:"pointer", left: "100px"}}>
                   <iframe src={url} title="Link Preview" style={{ width: '100%', height: '100%' }} />
              </div>
          )}
    </div>
  );
}


export default LinkPreviewer;