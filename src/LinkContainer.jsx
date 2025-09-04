import { createElement } from "react";

import "./ui/LinkContainer.css";

export function LinkContainer({ url, content, target }) {
    function handleClick(e) {
        e.stopPropagation();
    }

    return (
        <div className="link-container-wrapper" onClick={handleClick}>
            <a className="link-container" href={url.value} target={target}>
                <div className="link-container-content">{content}</div>
            </a>
        </div>
    );
}
