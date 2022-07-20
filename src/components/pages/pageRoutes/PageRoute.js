import React from 'react';
import { Switch, Route} from 'react-router-dom';
import NewsPage from '../News/NewsPage';
import FooterNav from '../templates/footer/FooterNav';
import Nav from '../templates/navbar/Nav';

function PageRoute() {
    return (
        <div>
            <Nav />
            <main>
                <Switch>
                    {/* /* <Route path="/about" component={About} />  */}


                    {/* <Route path="/academics" component={Academics} />
                    <Route path="/admission" component={Admission} /> */}

                    {/* <Route path="/campus" component={Campus} /> */}
                    <Route path="/news" component={NewsPage} />


                </Switch>
            </main>



            <FooterNav />
        </div>
    );
}

export default PageRoute;