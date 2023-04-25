import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState }  from 'react'
import DropDown from '../../../../components/DropDown'
import styles from './styles';
import { FlatList } from 'react-native';
import strings from '../../../../components/locales';
import Button from '../../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { verticalScale } from '../../../../utils/scale';

const countries = ["Egypt", "Canada", "Australia", "Ireland"];
const data = [
  {
    number: "102",
    name: "Vertical",
    id: 1,
  },
  {
    number: "47",
    name: "Square",
    id: 1,
  },
  {
    number: "03",
    name: "Branch Press",
    id: 1,
  },
  {
    number: "78",
    name: "40 Yard Dash",
    id: 1,
  },
];

const Training = (props:any) => {
  const [state, setState]:any = useState(null);

  return (
    <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}

    >
    <View style={styles.TrainerContainer}>
       <DropDown data={countries} label={"Season"} />
       <FlatList
  data={props.data}
  numColumns={2}
  renderItem={({ item }) => {
    return (
     <View style={styles.view}>
       <TouchableOpacity style={[styles.trainerFlatlist,{
      borderColor: state === item ? '#ccc' :"#fff", borderWidth:1
       }]} onPress={() => setState(item)}>
        <Text style={styles.trainerName}>{item.name}</Text>
        <Text style={styles.trainerNumber}>{item.number}</Text>
      </TouchableOpacity>
     </View>
    );
  }}
/>
<View style={[styles.thirdContain,{marginTop:verticalScale(20), marginBottom:verticalScale(20)}]}>
        <Button
          buttonText={strings.addNew}
          style={styles.addNew}
        />
      </View>
      
    </View>
    </ScrollView>
    
  )
}

export default Training