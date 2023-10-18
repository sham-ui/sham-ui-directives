/**
 * Base directive class for event listener
 * @example
 * import { EventListener } from 'sham-ui-directives';
 *
 * // directive for 'click' event listener
 * class onclick extends EventListener {
 *     constructor() {
 *         super( 'click' );
 *     }
 * }
 */
export class EventListener {
    constructor( type ) {
        this.type = type;
        this.handler = null;
        this.callback = this.callback.bind( this );
    }

    callback( event ) {
        this.handler( event );
    }

    bind( node ) {
        node.addEventListener( this.type, this.callback );
    }

    unbind( node ) {
        node.removeEventListener( this.type, this.callback );
    }

    update( handler ) {
        this.handler = handler;
    }
}

/**
 * Directive for 'click' listener
 * @example
 * <template>
 *   <button :onclick={{() => window.alert( 'Clicked' )}}>Click me!</button>
 * </template>
 * <script>
 *     import { onclick } from 'sham-ui-directives';
 *
 *     function extendContext() {
 *         this.ctx.appendDirectives( { onclick } );
 *     }
 *
 *     export default Component( extendContext, Template );
 * </script>
 */
export class onclick extends EventListener {
    constructor() {
        super( 'click' );
    }
}

/**
 * Directive for 'submit' listener
 */
export class onsubmit extends EventListener {
    constructor() {
        super( 'submit' );
    }
}

/**
 * Directive for 'load' listener
 */
export class onload extends EventListener {
    constructor() {
        super( 'load' );
    }
}

/**
 * Directive for 'resize' listener
 */
export class onresize extends EventListener {
    constructor() {
        super( 'resize' );
    }
}

/**
 * Directive for 'scroll' listener
 */
export class onscroll extends EventListener {
    constructor() {
        super( 'scroll' );
    }
}

/**
 * Directive for 'input' listener
 */
export class oninput extends EventListener {
    constructor() {
        super( 'input' );
    }
}

/**
 * Directive for 'select' listener
 */
export class onselect extends EventListener {
    constructor() {
        super( 'select' );
    }
}

