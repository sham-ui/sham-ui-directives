class EventListener {
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

export default {
    onclick: class extends EventListener {
        constructor() {
            super( 'click' );
        }
    },
    onsubmit: class extends EventListener {
        constructor() {
            super( 'submit' );
        }
    },
    onload: class extends EventListener {
        constructor() {
            super( 'load' );
        }
    },
    onresize: class extends EventListener {
        constructor() {
            super( 'resize' );
        }
    },
    onscroll: class extends EventListener {
        constructor() {
            super( 'scroll' );
        }
    },
    oninput: class extends EventListener {
        constructor() {
            super( 'input' );
        }
    },
    onselect: class extends EventListener {
        constructor() {
            super( 'select' );
        }
    }
};
