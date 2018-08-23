import renderer from 'sham-ui-test-helpers';
import Dummy from './Dummy.sht';
import { disabled } from '../../../src';

it( 'disabled true', () => {
    const meta = renderer( Dummy, {
        directives: {
            disabled
        },
        disabled: true
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

it( 'disabled false', () => {
    const meta = renderer( Dummy, {
        directives: {
            disabled
        },
        disabled: false
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
} );

it( 'disabled update', () => {
    const meta = renderer( Dummy, {
        directives: {
            disabled
        },
        disabled: true
    } );
    meta.widget.update( {
        disabled: false
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
    meta.widget.update( {
        disabled: true
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
} );
