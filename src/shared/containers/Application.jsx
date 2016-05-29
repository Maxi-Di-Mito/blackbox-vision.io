import React, { Component ,PropTypes } from 'react';
import Content from 'react-mdl/lib/Layout/Content';
import Layout from 'react-mdl/lib/Layout/Layout';
import Sidenav from '../components/common/SideNav.jsx';
import Footer from '../components/common/Footer.jsx';
import Header from '../components/common/Header.jsx';
import WhoWeAreSection from '../components/section/WhoWeAreSection.jsx';
import WhatWeDoSection from '../components/section/WhatWeDoSection.jsx';
import MeetTheTeamSection from '../components/section/MeetTheTeamSection.jsx';
import PortfolioSection from '../components/section/PortfolioSection.jsx';
import ContactSection from '../components/section/ContactSection.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Application extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        injectTapEventPlugin();
        componentHandler.upgradeAllRegistered();
    }

    componentDidUpdate() {
        componentHandler.upgradeDom();
    }

    render() {
        const links = [
            {
                link: "#WhoWeAre",
                message: "who we are"
            }, {
                link: "#WhatWeDo",
                message: "what we do"
            }, {
                link: "#MeetTheTeam",
                message: "meet the team"
            }, {
                link: "#Portfolio",
                message: "portfolio"
            }, {
                link: "#Contact",
                message: "contact"
            }, {
                link: "#Blog",
                message: "blog"
            }
        ];

        const social = [
            {
                color: "indigo",
                social: "facebook",
                link: ""
            }, {
                color: "blue",
                social: "twitter",
                link: ""
            }, {
                color: "red",
                social: "google-plus",
                link: ""
            }, {
                color: "black",
                social: "github",
                link: "https://github.com/BlackBoxVision"
            }
        ];

        const team = {
            title: "Meet the Team",
            description: "We are enthusiastic developers with remarkable skills on different modern growing technologies. Our vision is to interact with the client and make solutions according to their needs.",
            cardList: [
                {
                    imageUrl: "https://cosmicjs.com/uploads/904a8700-185c-11e6-ab5c-2dbce63d2a02-e21cf730-17d9-11e6-b4ed-9d2206eb621f-alan-backgrou.png",
                    name: "Alan Vaudagna",
                    description: "Mobile in the day, backend in the night, developer lifestyle. Passionate, hard worker, and self motivated. Great drummer by the way.",
                    socialList: [
                        {
                            social: "github",
                            color: "black",
                            url: "https://github.com/avaudagna"
                        },
                        {
                            social: "linkedin",
                            color: "indigo",
                            url: "https://ar.linkedin.com/in/alan-vaudagna-5101647b"
                        },
                        {
                            social: "google-plus",
                            color: "red",
                            url: "https://plus.google.com/+AlanVaudagna"
                        }
                    ]
                },
                {
                    imageUrl: "https://cosmicjs.com/uploads/90461a30-185c-11e6-ab5c-2dbce63d2a02-e226bb30-17d9-11e6-b4ed-9d2206eb621f-federico-back.png",
                    name: "Federico Catinello",
                    description: "FullStack Developer. Proactive Researcher. High commitment with new deals. Crazy about networking.",
                    socialList: [
                        {
                            social: "github",
                            color: "black",
                            url: "https://github.com/fedecatinello"
                        },
                        {
                            social: "linkedin",
                            color: "indigo",
                            url: "https://ar.linkedin.com/in/fcatinello"
                        },
                        {
                            social: "google-plus",
                            color: "red",
                            url: "https://plus.google.com/115178305356749953986"
                        }
                    ]
                },
                {
                    imageUrl: "https://cosmicjs.com/uploads/9053d5d0-185c-11e6-ab5c-2dbce63d2a02-e23a1c20-17d9-11e6-b4ed-9d2206eb621f-jonatan-backg.png",
                    name: "Jonatan Salas",
                    description: "FullStack Developer. Open source projects contributor. Tenacious and self-motivated. Interested in new growing technologies.",
                    socialList: [
                        {
                            social: "github",
                            color: "black",
                            url: "https://github.com/JonatanSalas"
                        },
                        {
                            social: "linkedin",
                            color: "indigo",
                            url: "https://ar.linkedin.com/in/jonatanezequielsalas"
                        },
                        {
                            social: "google-plus",
                            color: "red",
                            url: "https://plus.google.com/+JonatanSalasJS"
                        }
                    ]
                }
            ]
        };

        return (
            <Layout fixedHeader>
                <Header logo="/assets/images/logo.png" logoSize="25px" linkList={links}/>
                <Sidenav title="BlackBox Vision" linkList={links}/>
                <Content>
                    <WhoWeAreSection/>
                    <WhatWeDoSection/>
                    <MeetTheTeamSection title={team.title} description={team.description} cardList={team.cardList}/>
                    <PortfolioSection/>
                    <ContactSection/>
                    <Footer socialList={social} copyright="BlackBox Vision @ 2016"/>
                </Content>
            </Layout>
        )
    }
}

export default Application;