import renderer from 'sham-ui-test-helpers';
import ShamUiDirectives from '../../src/sham-ui-directives';

it( 'renders correctly', () => {
    const meta = renderer( ShamUiDirectives, {} );
    expect( meta.toJSON() ).toMatchSnapshot();
} );
