import React from "react";
import "./List.css";

// This component exports both the List and ListItem components

export const List = ({ children }) => (
    <ul className="list-group">
        {children}
    </ul>
);

export function ListItem({ children }) {
    return <li className="list-group-item">{children}</li>
}