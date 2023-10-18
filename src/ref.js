/**
 * Directive for reference to Node
 * @example
 * <template>
 *   <input :ref={{$.inputField}} value="default value"/>
 * </template>
 * <script>
 *     import { ref } from 'sham-ui-directives';
 *
 *     function extendContext() {
 *         this.ctx.appendDirectives( { ref } );
 *     }
 *
 *     function Input( options, didMount ) {
 *         didMount( () => {
 *             alert( this.inputField.value );
 *         } )
 *     }
 *
 *     export default Component( extendContext, Template, Input );
 * </script>
 */
export default class ref {
    constructor( component ) {
        this.component = component;
        this.node = null;
        this.name = null;
    }

    bind( node ) {
        this.node = node;
    }

    unbind() {
        this.node = null;
        if ( this.name ) {
            delete this.component[ this.name ];
        }
        this.name = null;
    }

    update( name ) {
        this.name = name;
        this.component[ name ] = this.node;
    }
}
