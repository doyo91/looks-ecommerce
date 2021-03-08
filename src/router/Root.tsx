import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom"

// Components

export const Root = () => {
  return (
    <Router>
      <>
        <Switch>
          {/* <Route exact path="/shop" component={Shop} />
            <Route exact path="/" component={Home} />
            <Route path="**" component={Notfoundpage} /> */}
        </Switch>
      </>
    </Router>
  )
}
