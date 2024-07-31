"use client"

import React, { useState, cloneElement } from 'react';

const ShowMoreLess = ({ content, maxChars = 200 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const renderContent = () => {
        if (typeof content === 'string') {
            return isExpanded ? content : `${content.substring(0, maxChars)}...`;
        }

        if (React.isValidElement(content)) {
            const textContent = content.props.children.reduce((acc, child) => {
                return acc + (typeof child === 'string' ? child : '');
            }, '');

            return isExpanded
                ? content
                : cloneElement(content, {}, `${textContent.substring(0, maxChars)}...`);
        }

        return null;
    };

    return (
        <div>
            {renderContent()}
            <button style={style} onClick={toggleExpand}>
                {isExpanded ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
};

const style = {
    background: "none",
    border: "none",
    fontWeight: 500,
    textDecoration: "underline",
    textDecorationThickness: "max(1px, .0625rem)",
    textUnderlineOffset: ".1578em",
    cursor: "pointer",
    color: "inherit",
    margin: "10px 0",
    display: "block"
}

export default ShowMoreLess;

