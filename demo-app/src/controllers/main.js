import { DI } from 'sham-ui';
import { onclick, disabled } from '../../../src/index';
import App from '../widgets/App.sht';

export default function() {
    const app = new App( 'body', 'app', {
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

    DI.bind( 'widgets:app', app );
}
