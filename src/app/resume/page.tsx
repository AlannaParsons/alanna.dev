
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Resume() {

  return (
    <div className="flex flex-col"> 
        <header className={`h-[56px] bg-transparent absolute top-15 z-0 p-4`} > 
          <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGev_jE56A&#x2F;fd8YlA-3I39kO3mXsvXdxA&#x2F;view?utm_content=DAGev_jE56A&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">
            <div className="flex w-12 h-12 justify-center items-center size-18 rounded-full bg-radial from-black/90 from-20% to-transparent to-80% "> 
              <FontAwesomeIcon icon={faLink} className="w-7 h-7"/>
            </div>
          </a> 
        </header>

        <iframe loading="lazy" className="h-full"
          src="https://www.canva.com/design/DAGv-b7mAfc/MIF52qveGZh3sN5_o4lTGw/view?embed" allowFullScreen allow="fullscreen">
        </iframe>
        {/* https://www.canva.com/design/DAGv-b7mAfc/23X5BE-JibbNzDxzznnZHQ/view?utm_content=DAGv-b7mAfc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hae44d42cb0
                   src="https://www.canva.com/design/DAGev_jE56A/fd8YlA-3I39kO3mXsvXdxA/view?embed" allowFullScreen allow="fullscreen">
*/}
    </div>
  )
}