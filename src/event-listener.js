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

export class onclick extends EventListener {
    constructor() {
        super( 'click' );
    }
}
export class onsubmit extends EventListener {
    constructor() {
        super( 'submit' );
    }
}
export class onload extends EventListener {
    constructor() {
        super( 'load' );
    }
}
export class onresize extends EventListener {
    constructor() {
        super( 'resize' );
    }
}
export class onscroll extends EventListener {
    constructor() {
        super( 'scroll' );
    }
}
export class oninput extends EventListener {
    constructor() {
        super( 'input' );
    }
}
export class onselect extends EventListener {
    constructor() {
        super( 'select' );
    }
}

