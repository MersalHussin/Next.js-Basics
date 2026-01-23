// import React from 'react';

import { ReactNode } from "react";

const ProudctsLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className="flex gap-20">
            <h1>Products List Layout</h1>
            <div>
                {children}
            </div>
        </div>
    );
}

export default ProudctsLayout;
