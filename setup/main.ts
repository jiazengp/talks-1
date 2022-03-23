import { defineAppSetup } from '@slidev/types'
import { Inkline, components } from '@inkline/inkline';
import '@inkline/inkline/inkline.scss';
import '../styles/main.scss';

export default defineAppSetup(({ app, router }) => {
    app.use(Inkline, {
        components
    });
})