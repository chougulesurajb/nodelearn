
import App from '../App.jsx';
// import Login from '../App.jsx';

function Auth(nextState, replace) {
    if (!Login.isUseloggedin()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}
const routes = {
    component: App,
    childRoutes: [
        {
            path: '/',
            onEnter: (nextState, replace) => {
                if (Login.isUseloggedin()) {
                    replace('/front');
                } else {
                    replace('/auth');
                }
            }
        },
        {
            path: '/App',
            component: Apppage,
            onEnter: Auth,
        }]
}