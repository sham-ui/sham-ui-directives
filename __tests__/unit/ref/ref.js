import renderer from 'sham-ui-test-helpers';
import Dummy from './Dummy.sht';
import { ref } from '../../../src';

it( 'ref', () => {
    const meta = renderer( Dummy, {}, {
        directives: {
            ref
        }
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
    expect( meta.component.form.tagName ).toBe( 'FORM' );
    expect( meta.component.firstName.value ).toBe( 'First name' );
    expect( meta.component.lastName.value ).toBe( 'Last name' );
} );
