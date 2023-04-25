import { Dimensions, StyleSheet } from 'react-native';
import { DimensionsScale } from '../../../../theme/Dimensions';
import { verticalScale } from '../../../../utils/scale';
import { colors } from '../../../../theme/colors';

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
    buttonEdit: {
        borderWidth: 0,
        marginTop: 20,
        width: '49%',
        paddingVertical: 7,
        backgroundColor: "#788896",
    },
    secondContain: {
        flex: 5,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 20,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: verticalScale(15)
    },
    noProfile: {
        height: verticalScale(100),
        width: verticalScale(100),
        borderRadius: 50,
    },
    btnTabActive: {
        borderBottomWidth: 3,
        borderColor: colors.primaryButtonColor
    },
});

export default styles;
