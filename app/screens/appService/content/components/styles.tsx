import { Dimensions, StyleSheet } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    firstContain: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    secondContain: {
        flex: 3.5,
        alignItems: 'center'
    },
    thirdContain: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default styles;
