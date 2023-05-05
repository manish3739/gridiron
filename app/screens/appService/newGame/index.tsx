
import React, { useState } from "react";
import { View, Text, Image } from 'react-native';
import { connect } from "react-redux";
import NewGameView from "./components/newGame";
import { CHAT_ICON, EMAIL_ICON } from "../../../theme/constantImages";
import styles from "./components/styles";
import strings from "../../../components/locales";
import Modal from "react-native-modal";

const NewGame = (props: any) => {
    const [isDeleteVisible, setIsDeleteVisible] = useState<boolean>(false);

    function handleShare() {
        setIsDeleteVisible(true);
    };
    return (
        <View style={{ flex: 1 }}>
            <NewGameView
                handleShare={handleShare}
            />

            <Modal onBackdropPress={() => setIsDeleteVisible(!isDeleteVisible)} isVisible={isDeleteVisible} style={styles.modalContainer}>
                <View style={styles.mainModalContainer}>
                    <View style={styles.mainView}>
                        <View style={styles.emailContainer}>
                            <Image style={styles.emailIconStyle} resizeMode="contain" source={CHAT_ICON} />
                        </View>
                        <Text style={styles.emailTextStyle}>{strings.smsLabel}</Text>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.emailContainer}>
                            <Image style={styles.emailIconStyle} resizeMode="contain" source={EMAIL_ICON} />
                        </View>
                        <Text style={styles.emailTextStyle}>{strings.emailLabel}</Text>
                    </View>
                </View>
            </Modal>

        </View>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

export default connect(null, mapDispatchToProps)(NewGame);