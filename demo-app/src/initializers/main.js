import { onclick, disabled } from '../../../src/index';
import App from '../components/App.sht';

export default function() {
    new App( {
        ID: 'app',
        container: document.querySelector( 'body' ),
        directives: {
            onclick,
            disabled
        },
        click() {
            this.update( {
                disabled: !this.options.disabled
            } );
        },
        disabled: true
    } );
}
