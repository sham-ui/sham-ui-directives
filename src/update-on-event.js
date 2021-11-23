
/**
 * Base directive class for event listener
 * @example
 * import { UpdateOnEvent } from 'sham-ui-directives';
 *
 * // directive for update on 'input' event listener
 * class updateOnEvent extends UpdateOnEvent {
 *     constructor() {
 *         super( 'input' );
 *     }
 * }
 */
export class UpdateOnEvent {
    constructor( component, type ) {
        this.type = type;
        this.callback = this.callback.bind( this );
        this.component = component;
    }

    callback() {
        this.component.update( {
            [ this.field ]: this._getValue()
        } );
    }

    bind( node ) {
        this.node = node;
        node.addEventListener( this.type, this.callback );
    }

    unbind( node ) {
        node.removeEventListener( this.type, this.callback );
        this.node = null;
    }

    update( args ) {
        this.field = args;
    }

    _getValue() {
        const node = this.node;
        if ( node.type === 'checkbox' ) {
            return node.checked;
        }
        return node.value;
    }
}

/**
 * Update on 'change' event
 */
export  class onChangeUpdate extends UpdateOnEvent {
    constructor( component ) {
        super( component, 'change' );
    }
}

/**
 * Update on 'input' event
 */
export  class onInputUpdate extends UpdateOnEvent {
    constructor( component ) {
        super( component, 'input' );
    }
}
