import { onclick, disabled } from '../../../src/index';
import App from '../widgets/App.sht';

export default function() {
    new App( {
        ID: 'app',
        containerSelector: 'body',
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
