import renderer from 'sham-ui-test-helpers';
import Dummy from './Dummy.sht';
import directives from '../../../src/index';

it( 'click', () => {
    expect.assertions( 2 );

    const click = jest.fn();
    const meta = renderer( Dummy, {
        directives,
        click
    } );
    expect( meta.toJSON() ).toMatchSnapshot();
    document.querySelector( 'button' ).click();
    expect( click ).toHaveBeenCalledTimes( 1 );
} );
