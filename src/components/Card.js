import React from "react";

export default function Card({ title, styles = "", children }) {
	return (
		<div className={`card-container ${styles}`}>
			<h3>{title}</h3>
			<div className="card-content">{children}</div>
		</div>
	);
}
