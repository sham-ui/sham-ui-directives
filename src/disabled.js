/**
 * Directive for "disabled" attribute
 * @example
 * <template>
 *   <input :disabled={{inputDisabled}}/>
 * </template>
 *
 * <script>
 *     import { disabled } from 'sham-ui-directives';
 *
 *     function extendContext() {
 *         this.ctx.appendDirectives( { disabled } );
 *     }
 *
 *     function Input( options ) {
 *         options( {
 *             [ $.inputDisabled ]: true
 *         } );
 *     }
 *
 *     export default Component( extendContext, Template, Input );
 * </script>
 */
export default class disabled {
    constructor() {
        this.node = null;
    }

    bind( node ) {
        this.node = node;
    }

    unbind() {
        this.node = null;
    }

    update( value ) {
        this.node.disabled = value;
    }
}
