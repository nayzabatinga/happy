import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Landing from './components/Landing'
import OrphanagesMap from './components/OrpharnagesMap'

function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/orphanages" exact component={OrphanagesMap}/>
            </Switch>
        </BrowserRouter>
    )
}

export default routes