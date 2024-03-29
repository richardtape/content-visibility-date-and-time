import { applyFilters } from '@wordpress/hooks';

/**
 * Determine if the passed block props contain rules of the passed type.
 *
 * @param {object} props The currently selected block's props.
 * @param {string} type The type of the rules i.e. userAuthenticated or specialPage (or ones from add-ons).
 *
 * @return {bool} true if the passed props contain non-empty rules of the passed type. False otherwise.
 */
 function hasRules( props, type ) {

    if ( ! props.contentVisibilityRules ) {
        return false;
    }

    if ( ! props.contentVisibilityRules[type] ) {
        return false;
    }

    // Default to false. Passed through a filter later.
    let hasRules = false;

    switch ( type ) {
        
        case 'dateTime':

            if ( props.contentVisibilityRules[type] && props.contentVisibilityRules[type]['start'] && Object.keys( props.contentVisibilityRules[type]['start'] ).length !== 0 ) {
                hasRules = true;
            }

            if ( props.contentVisibilityRules[type] && props.contentVisibilityRules[type]['end'] && Object.keys( props.contentVisibilityRules[type]['end'] ).length !== 0 ) {
                hasRules = true;
            }

            break;

        default:
            break;
    }

    return applyFilters( 'content-visibility-has-rules', hasRules, props, type );

}// end hasRules()

export default hasRules;