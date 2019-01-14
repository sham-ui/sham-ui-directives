import renderer from 'sham-ui-test-helpers';
import Dummy from './Dummy.sht';
import { ref } from '../../../src';

it( 'ref', () => {
    const meta = renderer( Dummy, {
        directives: {
            ref
        }
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
    expect( meta.widget.form.tagName ).toBe( 'FORM' );
    expect( meta.widget.firstName.value ).toBe( 'First name' );
    expect( meta.widget.lastName.value ).toBe( 'Last name' );
} );
