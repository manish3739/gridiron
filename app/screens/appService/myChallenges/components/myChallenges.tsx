
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import strings from "../../../../components/locales";
import { verticalScale } from "../../../../utils/scale";
import { useNavigation } from "@react-navigation/native";

const MyChallengesView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.firstContain}>
        <Header
          HeaderText={strings.myChallengesLabel}
          leftImg={true}
          isGoBack={true}
        />
      </View>
      <View style={styles.secondContain}>
        <View style={styles.mainInformationContain}>
          <View>
            <Text style={styles.boxTextStyle}>Key Gray</Text>
            <Text style={styles.greyTextStyle}>QB- Ohio- junior</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.boxTextStyle}>11</Text>
            <Text style={styles.greyTextStyle}>{strings.challengesLabel}</Text>
          </View>
          <View>
            <Text style={styles.boxTextStyle}>5000</Text>
            <Text style={styles.greyTextStyle}>{strings.totalIQLabel}</Text>
          </View>
        </View>

        <View style={styles.IQTextConatiner}>
          <Text style={[styles.boxTextStyle, { fontSize: verticalScale(19) }]}>{strings.IQChallengesLabel}</Text>
        </View>
        <View style={styles.mainGreyContainer}>
          <Text style={[styles.boxTextStyle, { fontSize: verticalScale(17) }]}>{strings.completedLabel} (6)</Text>
          <FlatList
            data={[{ label: 'Quaterback Test' }, { label: 'Football Test' }, { label: 'Defense Test' }]}
           // @ts-ignore
            renderItem={(item: {
              [x: string]: any; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
            }, index: any) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('CompletedChallenges', { challengeDetail: item?.item.label })} style={styles.listMainContainer}>
                  <Text style={[styles.boxTextStyle, { fontSize: verticalScale(19), paddingVertical: 20 }]}>{item?.item.label}</Text>
                  <Text style={styles.scoreMainView}>{strings.scoreLabel}: 600/1200 points</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MyChallengesView;