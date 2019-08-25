import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    // loader: ()=>import ('./'),
    loader: ()=>import (process.env.PUBLIC_URL+'/'),
    loading(){
        return <div>loading</div>
    }
});

export default () => <LoadableComponent/>;