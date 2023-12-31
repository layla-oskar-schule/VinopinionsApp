import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { PlusIcon } from '../utils/icons';

// TODO: Make icon size configurable
const AddButton = (props: TouchableOpacityProps) => {
    return (
        <TouchableOpacity {...props}>
            <PlusIcon size={75} />
        </TouchableOpacity>
    );
};

export default AddButton;
