import { DI } from 'sham-ui';
import directives from '../../../src/index';
import App from '../widgets/App.sht';

export default function() {
    const app = new App( 'body', 'app', {
        directives,
        click( e ) {

            // eslint-disable-next-line no-console
            console.log( 'Click', e );
        }
    } );

    DI.bind( 'widgets:app', app );
}
