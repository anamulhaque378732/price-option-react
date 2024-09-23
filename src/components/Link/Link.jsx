import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <li className='mr-20 p-2 rounded-md hover:bg-sky-400'>
            <a href={route.path}> {route.name}</a>
        </li>
    );
};


Link.propTypes = {
    route: PropTypes.object.isRequired
}
export default Link;