import Vue from 'vue';
import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent';
import ContactsCreate from './views/ContactsCreate';
import ContactsShow from './views/ContactsShow';
import ContactsEdit from './views/ContactsEdit';
import ContactsIndex from './views/ContactsIndex';
import BirthdaysIndex from './views/BirthdaysIndex';
import Logout from './Actions/Logout';
import AddCountry from './views/AddCountry';
import CountryIndex from './views/CountryIndex';
import CountryShow from './views/CountryShow';
import CountryEdit from './views/CountryEdit';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: '/',
            component: ExampleComponent,
            meta: { title: 'Welcome' },
        },
        {
            path: '/contacts',
            component: ContactsIndex,
            meta: { title: 'Contacts' },
        },
        {
            path: '/contacts/create',
            component: ContactsCreate,
            meta: { title: 'Add New Contact' },
        },
        {
            path: '/contacts/:id',
            component: ContactsShow,
            meta: { title: 'Details for Contact' },
        },
        {
            path: '/contacts/:id/edit',
            component: ContactsEdit,
            meta: { title: 'Edit Contact' },
        },
        {
            path: '/birthdays',
            component: BirthdaysIndex,
            meta: { title: "This Month's Birthdays" },
        },
        {
            path: '/country',
            component: CountryIndex,
            meta: { title: 'Countries' },
        },
        {
            path: '/add/country',
            component: AddCountry,
            meta: { title: 'Add Country' },
        },
        {
            path: '/country/:id',
            component: CountryShow,
            meta: { title: 'Details for Country' },
        },
        {
            path: '/logout',
            component: Logout,
        },
        {
            path: '/country/:id/edit',
            component: CountryEdit,
            meta: { title: 'Edit Country' },
        },
    ],
    mode: 'history',
});