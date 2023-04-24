import { Dimensions, StyleSheet } from 'react-native';
import { verticalScale } from '../../../../utils/scale';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    firstContain: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
        paddingTop:20
    },
    secondContain: {
        flex: 5.5,
        paddingHorizontal: verticalScale(20),
        paddingTop:verticalScale(40)
    },
    thirdContain: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default styles;
