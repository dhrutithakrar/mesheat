import React from "react";

const AdminLink=({imgSrc, text})=>{
    return(

            <div className="ui comments py-3">
                <div className="comment">
                    <a className="avatar">
                     <img src={imgSrc} />
                    </a>
                <div className="pt-1  font-weight-bolder">
                      <a className="text1">{text }</a>
                </div>
             </div>
        </div>
    )
}
export default AdminLink;