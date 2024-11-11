import React from "react";

interface DisplayProps {
    value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => (
    <div id="display" className="display">
        {value}
    </div>
);

export default Display;
