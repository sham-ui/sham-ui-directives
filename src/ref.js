export default class {
    constructor( widget ) {
        this.widget = widget;
        this.node = null;
        this.name = null;
    }

    bind( node ) {
        this.node = node;
    }

    unbind() {
        this.node = null;
        if ( this.name ) {
            delete this.widget[ this.name ];
        }
        this.name = null;
    }

    update( name ) {
        this.name = name;
        this.widget[ name ] = this.node;
    }
}
