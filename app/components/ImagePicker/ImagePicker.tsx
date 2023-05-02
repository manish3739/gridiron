import React from "react";
import PropTypes from 'prop-types';
import {
  Platform,
  Alert,
} from "react-native";
import ImageResizer from '@bam.tech/react-native-image-resizer';
import RNFS from "react-native-fs";
import * as ImagePicker from "react-native-image-picker"
import strings from "../locales";
import { PermissionsAndroid } from "react-native";
import { Linking } from "react-native";
import { check, PERMISSIONS, RESULTS, request, checkMultiple } from 'react-native-permissions';

const options: any = {
  title: "Select Avatar",
  storageOptions: {
    skipBackup: true,
    path: "images"
  },
  includeBase64: true,
  cropping: true
};


const FormImagePicker = ({
  value,
  touched,
  error,
  onImageChange,
  showPreview,
  renderTrigger,
  ...rest
}: any) => {

  const selectImage = () => {
    Alert.alert(
      //This is title
      '',
      //This is body text
      strings.selectImageLabel,
      [
        {
          text: strings.takePhotoLabel, onPress: async () => {
            check(Platform.OS == 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA)
              .then((result) => {
                switch (result) {
                  case RESULTS.UNAVAILABLE:
                    console.log('This feature is not available (on this device / in this context)');
                    break;
                  case RESULTS.DENIED:
                    request(Platform.OS == 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA).then((result) => {
                      if (result == 'blocked') {
                        Alert.alert(
                          strings.cameraLibraryLabel || "",
                          strings.cameraLibraryDescriptionLabel || "",
                          [
                            { text: strings.cancelLabel, style: 'cancel' },
                            { text: strings.openSettings, onPress: openSettings },
                          ],
                        );
                      }
                    });
                    console.log('The permission has not been requested / is denied but requestable');
                    break;
                  case RESULTS.LIMITED:
                    console.log('The permission is limited: some actions are possible');
                    break;
                  case RESULTS.GRANTED:
                    handleCamera();
                    break;
                  case RESULTS.BLOCKED:
                    request(Platform.OS == 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA).then((result) => {
                      if (result == 'blocked') {
                        Alert.alert(
                          strings.cameraLibraryLabel || "",
                          strings.cameraLibraryDescriptionLabel || "",
                          [
                            { text: strings.cancelLabel, style: 'cancel' },
                            { text: strings.openSettings, onPress: openSettings },
                          ],
                        );
                      }
                    });
                    break;
                }
              })
              .catch((error) => {
                console.log("error", error)
              });
          }
        },
        {
          text: strings.chooseFromLibrary, onPress: async () => {
            if (Platform.OS == 'ios') {
              check(PERMISSIONS.IOS.PHOTO_LIBRARY)
              .then((result) => {
                switch (result) {
                  case RESULTS.UNAVAILABLE:
                    if (result == 'unavailable') {
                      Alert.alert(
                        strings.photoLibraryLabel || "",
                        strings.photoLibraryDescriptionLabel || "",
                        [
                          { text: strings.cancelLabel, style: 'cancel' },
                          { text: strings.openSettings, onPress: openSettings },
                        ],
                      );
                    }
                    break;
                  case RESULTS.DENIED:
                    request(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {
                      if (result == 'blocked') {
                        Alert.alert(
                          strings.photoLibraryLabel || "",
                          strings.photoLibraryDescriptionLabel || "",
                          [
                            { text: strings.cancelLabel, style: 'cancel' },
                            { text: strings.openSettings, onPress: openSettings },
                          ],
                        );
                      }
                    });
                    break;
                  case RESULTS.LIMITED:
                    request(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {
                      if (result == 'limited') {
                        Alert.alert(
                          strings.photoLibraryLabel || "",
                          strings.photoLibraryDescriptionLabel || "",
                          [
                            { text: strings.cancelLabel, style: 'cancel' },
                            { text: strings.openSettings, onPress: openSettings },
                          ],
                        );
                      }
                    });
                    break;
                  case RESULTS.GRANTED:
                    handleImageLibrary();
                    console.log('The permission is granted');
                    break;
                  case RESULTS.BLOCKED:
                    request(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {
                      if (result == 'blocked') {
                        Alert.alert(
                          strings.photoLibraryLabel || "",
                          strings.photoLibraryDescriptionLabel || "",
                          [
                            { text: strings.cancelLabel, style: 'cancel' },
                            { text: strings.openSettings, onPress: openSettings },
                          ],
                        );
                      }
                    });
                    break;
                }
              })
              .catch((error) => {
                console.log("error", error)
              });
            } else {
              check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
              .then((result) => {
                switch (result) {
                  case RESULTS.UNAVAILABLE:
                    console.log('This feature is not available (on this device / in this context)');
                    break;
                  case RESULTS.DENIED:
                    request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((result) => {
                      if (result == 'blocked') {
                        Alert.alert(
                          strings.photoLibraryLabel || "",
                          strings.photoLibraryDescriptionLabel || "",
                          [
                            { text: strings.cancelLabel, style: 'cancel' },
                            { text: strings.openSettings, onPress: openSettings },
                          ],
                        );
                      }
                    });
                    break;
                  case RESULTS.LIMITED:
                    console.log('The permission is limited: some actions are possible');
                    break;
                  case RESULTS.GRANTED:
                    handleCamera();
                    break;
                  case RESULTS.BLOCKED:
                    request(Platform.OS == 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA).then((result) => {
                      if (result == 'blocked') {
                        Alert.alert(
                          strings.cameraLibraryLabel || "",
                          strings.cameraLibraryDescriptionLabel || "",
                          [
                            { text: strings.cancelLabel, style: 'cancel' },
                            { text: strings.openSettings, onPress: openSettings },
                          ],
                        );
                      }
                    });
                    break;
                }
              })
              .catch((error) => {
                console.log("error", error)
              });
            }
           
          }
        },
      ],
      { cancelable: true }
    );
  };

  const openSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
  };


  async function handleCamera() {
    ImagePicker.launchCamera(options, (response: any) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let path = response.uri;
        console.log("path", path)
        if (Platform.OS === "ios") {
          path = path ? `~${path.substring(path.indexOf("/Documents"))}` : "";
        }
        if (!response.fileName) response.fileName = path?.split("/").pop();
        if (response.width > 1000 || response.height > 1000) {
          let fileType: any = "JPEG";

          if (response.type === "image/png") {
            fileType = "PNG";
          }
          ImageResizer.createResizedImage(
            response.uri,
            1000,
            1000,
            fileType,
            80,
            0,
            // null,
            // true
          )
            .then(async (res: any) => {
              // res.uri is the URI of the new image that can now be displayed, uploaded...
              // res.path is the path of the new image
              // res.name is the name of the new image with the extension
              // res.size is the size of the new image
              let base64image;
              try {
                base64image = await RNFS.readFile(res.path, "base64");
              } catch (error) { }
              onImageChange({
                data: base64image,
                uri: res.uri,
                fileName: res.name,
                type: response.type
              });
            })
            .catch((err: any) => {
              // Oops, something went wrong. Check that the filename is correct and
              // inspect err to get more details.
              console.log("error reduce", err);
            });
        } else {
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          onImageChange({
            uri: response?.assets && response?.assets[0].uri,
            data: response?.assets && response?.assets[0].base64,
            fileName: response?.assets && response?.assets[0].fileName,
            type: response?.assets && response?.assets[0].type
          });
        }
      }
    });
  }

  function handleImageLibrary() {
    ImagePicker.launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let path = response.uri;
        if (Platform.OS === "ios") {
          path = path ? `~${path.substring(path.indexOf("/Documents"))}` : "";
        }
        if (!response.fileName) response.fileName = path?.split("/").pop();
        if (response.width > 1000 || response.height > 1000) {
          let fileType: any = "JPEG";

          if (response.type === "image/png") {
            fileType = "PNG";
          }
          ImageResizer.createResizedImage(
            response.uri,
            1000,
            1000,
            fileType,
            80,
            0,
            // null,
            // true
          )
            .then(async (res: any) => {
              // res.uri is the URI of the new image that can now be displayed, uploaded...
              // res.path is the path of the new image
              // res.name is the name of the new image with the extension
              // res.size is the size of the new image
              let base64image;
              try {
                base64image = await RNFS.readFile(res.path, "base64");
              } catch (error) { }
              onImageChange({
                data: base64image,
                uri: res.uri,
                fileName: res.name,
                type: response.type
              });
            })
            .catch((err: any) => {
              // Oops, something went wrong. Check that the filename is correct and
              // inspect err to get more details.
              console.log("error reduce", err);
            });
        } else {
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          onImageChange({
            uri: response.assets[0].uri,
            data: response.assets[0].base64,
            fileName: response.assets[0].fileName,
            type: response.assets[0].type
          });
        }
      }
    });
  }
  const errors = error && touched ? error : undefined;
  return (
    <>
      {renderTrigger(selectImage)}
    </>
  );
};


FormImagePicker.propTypes = {
  renderTrigger: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  showPreview: PropTypes.bool
};

FormImagePicker.defaultProps = {
  showPreview: false
};

export default FormImagePicker;
