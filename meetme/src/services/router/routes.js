import Home from '../../components/Home/Home.vue';
import AboutUs from '../../components/AboutUs/AboutUs.vue';
import Services from '../../components/Servis/Services';
import PortfolioAll from '../../components/Portfolio/PortfolioAll.vue';
import Elements from '../../components/Elements.vue';
import Blog from '../../components/Blog/Blog.vue';
import SingleBlog from '../../components/SingleBlog.vue';
import Contact from '../../components/ContactUs/ContactUs.vue';

const allUrl = [
    { path: '/', name: 'Home', component: Home },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs,
        props: true
    },
    { path: '/services', name: 'Services', component: Services },
    {
        path: '/portfolio',
        name: 'PortfolioAll',
        component: PortfolioAll
    },
    { path: '/elements', name: 'Elements', component: Elements },
    { path: '/blog', name: 'Blog', component: Blog },
    { path: '/single-blog', name: 'SingleBlog', component: SingleBlog },
    { path: '/contact', name: 'Contact', component: Contact },
    
];
export default allUrl;