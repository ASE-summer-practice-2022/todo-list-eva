import React from 'react';

import CRUD from './CRUD';

export type ContextType = {
    store: CRUD;
};

const Context = React.createContext<ContextType | null>(null);

export default Context;
