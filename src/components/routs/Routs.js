import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import About from '../pages/About/About';
import Academics from '../pages/Academics/Academics';
import Admission from '../pages/Admission/Admission';
import Campus from '../pages/Campus_life/Campus';
import EventPage from '../pages/Events/EventPage';
import Main from '../pages/main/Main';
import News from '../pages/pageRoutes/PageRoute';
import Ins_tarixi from '../Haqida/Umumiy/Ins_tarixi';
import Rahbariyat from '../Haqida/Umumiy/Rahbariyat/Rahbariyat';
import Qarorlar from '../Haqida/Umumiy/Qarorlar/Qarorlar';

import Fakultetlar from '../Haqida/mamuriy/fakultetlar/Fakultetlar';
import Uslubiy from '../Haqida/mamuriy/Uslubiy/Uslubiy';
import Markaz from '../Haqida/mamuriy/Markaz/Markaz';
import Rahbariy from '../Haqida/mamuriy/Rahbariy/Rahbariy';
import ONizom from '../Haqida/mamuriy/OTMNizom/ONizom';
import Tashkilot from '../Haqida/Umumiy/Tashkilot/Tashkilot';
import UmumiyMalumot from '../Haqida/Umumiy/UmumiyMalumotlar/UmumiyMalumot';
import Boshqaruv from '../Haqida/Umumiy/Boshqaruv/Boshqaruv';
import Kengash from '../Haqida/Umumiy/Kengash/Kengash';
import IlmiyPage from '../pages/pageRoutes/Scientific/IlmiyPage';
import Research from '../pages/Research/Research';
import Acceptance from '../pages/Acceptance/Acceptance';
import Ommaviy from '../pages/News/ommaviy/Ommaviy';
import Elonlar from '../pages/News/elonlar/Elon';
import Yangiliklar from '../pages/News/yangiliklar/Yangiliklar';
// import NewsPage from '../pages/News/NewsPage';
import BannerNews from '../pages/News/newsBanner/BannerNews';
import Kafedralar from '../Haqida/mamuriy/kafedaralar/Kafedralar';

const Routs = (  ) => {
    return (
        <div>

            <BrowserRouter>

                <Switch>
                    {/* /* <Route path="/about" component={About} />  */}

                    <Route path="/academics" component={Academics} />
                    <Route path="/admission" component={Admission} />
                    <Route path="/tadbir1" component={EventPage} />
                    {/* <Route path="/campus" component={Campus} /> */}
                    <Route path="/news" component={News} />
                    <Route path="/about" component={Ins_tarixi} />
                    <Route path="/rahbariyat" component={Rahbariyat} />
                    
                    <Route path="/tashkilot" component={Tashkilot} />
                    <Route path="/qarorlar" component={Qarorlar} />
                    <Route path="/umumiy" component={UmumiyMalumot} />
                    <Route path="/kafedralar" component={Kafedralar} />
                    <Route path="/fakultetlar" component={Fakultetlar} />
                    <Route path="/uslubiy" component={Uslubiy} />
                    <Route path="/newsPage/:news_id" component={BannerNews} />
                    <Route path="/yangiliklar" component={Yangiliklar} />
                    <Route path="/ommaviy" component={Ommaviy} />
                    <Route path="/elonlar" component={Elonlar} />
                    <Route path="/markaz" component={Markaz} />
                    <Route path="/OTMnizom" component={ONizom} />
                    <Route path="/rahbariy" component={Rahbariy} />
                    <Route path="/boshqaruv" component={Boshqaruv} />
                    <Route path="/kengash" component={Kengash} />
                    <Route path="/ilmiy1" component={IlmiyPage} />
                    <Route path="/tadqiqot" component={Research} />
                    <Route path="/qabul" component={Acceptance} />
                    <Route path="/" component={Main} />

                </Switch>

            </BrowserRouter>

        </div>
    );
}

export default Routs;

