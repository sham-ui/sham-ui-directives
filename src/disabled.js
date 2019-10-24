/**
 * Directive for "disabled" attribute
 * @example
 * <template>
 *   <input :disabled={{inputDisabled}}/>
 * </template>
 * <script>
 *     import { disabled } from 'sham-ui-directives';
 *     import { options } from 'sham-ui-macro/babel.macro';
 *
 *     class Input extends Template {
 *         \@options inputDisabled = true;
 *
 *         constructor() {
 *             super( ...arguments );
 *             this.directives = {
 *                 ...( this.directives || {} ),
 *                 disabled
 *             };
 *         }
 *     }
 *
 *     export default Input;
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
