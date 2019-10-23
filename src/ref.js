export default class {
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
