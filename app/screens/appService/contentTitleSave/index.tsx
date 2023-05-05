
import React, { useState } from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import ContentTitleSaveView from "./components/ContentTitleSave";
import { Modal } from "../../../components/Modal";
import strings from "../../../components/locales";
import Button from "../../../components/Button";
import { colors } from "../../../theme/colors";

const ContentTitleSave = (props: any) => {
    const [isDeleteVisible, setIsDeleteVisible] = useState<boolean>(false);

    function handleDeleteConfirmation() {
        setIsDeleteVisible(true);
    };
    return (
        <View style={{ flex: 1 }}>
            <ContentTitleSaveView
                handleDeleteConfirmation={handleDeleteConfirmation}
            />
            <Modal onBackdropPress={() => setIsDeleteVisible(!isDeleteVisible)} isVisible={isDeleteVisible}>
                <Modal.Container>
                    <Modal.Header title="Are you sure you want to delete your account ?" />
                    <Modal.Body />
                    <Modal.Footer>
                        <Button
                            buttonText={strings.confirmDelete}
                            onPress={() => setIsDeleteVisible(!isDeleteVisible)}
                            buttonType={"secondary"}
                        />
                    </Modal.Footer>
                    <Modal.Footer>
                        <Button
                            buttonText={strings.cancelLabel}
                            onPress={() => setIsDeleteVisible(!isDeleteVisible)}
                            style={{ borderColor: colors.secondaryButtonColor }}
                            buttonLabelStyle={{ color: colors.secondaryButtonColor }}
                            buttonType={"tertiary"}
                        />
                    </Modal.Footer>
                </Modal.Container>
            </Modal>
        </View>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(ContentTitleSave);