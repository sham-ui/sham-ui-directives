import { createRootContext } from 'sham-ui';
import { onclick, disabled } from '../../../src/index';
import App from '../components/App.sfc';

export default function( DI ) {
    const ctx = createRootContext( {
        DI,
        ID: 'app',
        container: document.querySelector( 'body' ),
        directives: {
            onclick,
            disabled
        }
    } );

    new App( ctx );
}
