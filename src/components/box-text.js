import * as React from "react"
import { Link } from "gatsby"

const BoxText = ({ ...props }) => {

    return (
        <div className="boxtext">
            <h3>Box Testo</h3>
            <p>{props.txt}</p>
            <Link to={props.link}>{props.link}</Link>
        </div>
    )
}

export default BoxText