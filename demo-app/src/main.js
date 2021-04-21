import { createDI, start } from 'sham-ui';
import mainInitializer from './initializers/main';

if ( module.hot ) {
    if ( window.DI ) {
        const store = window.DI.resolve( 'sham-ui:store' );
        const app = store.byId.get( 'app' );
        if ( undefined !== app ) {
            app.remove();
            store.byId.values().forEach( component => {
                try {
                    component.remove();
                } catch ( e ) {
                    // eslint-disable-next-line no-empty
                }
            } );
        }
    }
    module.hot.accept();
}

const DI = createDI();

window.DI = DI;

mainInitializer( DI );
start( DI );
