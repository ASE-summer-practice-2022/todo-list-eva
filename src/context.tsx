import React from 'react';

import CRUD from './CRUD';

export type TodoContextType = {
    myCRUD: CRUD;
};

const Context = React.createContext<TodoContextType | null>(null);

export default Context;
