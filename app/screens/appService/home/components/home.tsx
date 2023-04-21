
import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { View } from 'react-native';
import Button from "../../../../components/Button";
import { colors } from "../../../../theme/colors";
import RNTextInput from "../../../../components/Input/RNTextInput";
import Header from "../../../../components/Header";
import strings from "../../../../components/locales";
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import { DimensionsScale } from "../../../../theme/Dimensions";
import CheckBox from "../../../../components/Checkbox";
import { HEADER_BACK_ICON } from "../../../../theme/constantImages";
import { verticalScale } from "../../../../utils/scale";

type DataType = {
  name:string,
  isSelected: boolean,
}

const HomeView = (props: any) => {

  let dataArr = [
    {
      name:'Male',
      isSelected: false
    },
    {
      name:'Female',
      isSelected: false
    },
    {
      name:'Rather not specified',
      isSelected: false
    },
  ];

  const [checkBoxData, setCheckBoxData] = useState<DataType[]>(dataArr);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} >

      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Header />
      </View>

      <View style={{ flex: 5, justifyContent: 'center', width: '100%', alignItems: 'center' }}>
           <View style={{flex:4 , width: '100%', justifyContent: 'center', alignItems: 'center'}}>
           <AnimatedProgress
                value={70}
                max={100}
                activeColor={'#56d1bf'}
                backgroundColor={"#c4c2c2"}
                width={DimensionsScale.width*0.9}
                style={{marginVertical:10}}
                height={15}
              />
        <Button
          buttonText={strings.continue}
          style={{ borderColor: colors.commonThemeColor }}
          buttonLabelStyle={{ color: colors.commonThemeColor }}
          buttonType={"tertiary"}
        />
        <Button
          buttonText={strings.continue}
          style={{ borderColor: colors.secondaryButtonColor, marginTop: 20 }}
          buttonLabelStyle={{ color: colors.secondaryButtonColor }}
          buttonType={"tertiary"}
        />
         <RNTextInput
          editable={true}
          placeholder="Enter educational qualification"
          keyboardType="default"
          showLeftImage={true}
          showRightImage={true}
          placeholderTextColor="#00000040"
          leftImage={HEADER_BACK_ICON}
          rightImage={HEADER_BACK_ICON}
          textInputContainer={{
            paddingLeft:40,
            paddingRight:40
          }}
        />
           </View>
          

       <View style={{flex:2,width:'100%'}}>
       <CheckBox 
          data={checkBoxData}
          isHorizontal={true}
          returnData={(val) => setCheckBoxData(val)}
          textStyle={{}}
        />
       </View>

      </View>
    </View>
  );
};

export default HomeView;