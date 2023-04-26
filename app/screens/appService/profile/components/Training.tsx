import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState }  from 'react'
import styles from './styles';
import { FlatList } from 'react-native';
import strings from '../../../../components/locales';
import Button from '../../../../components/Button';
import { verticalScale } from '../../../../utils/scale';



const Training = (props:any) => {
  const [state, setState]:any = useState(null);

  return (
    <FlatList
  data={[]}
  keyExtractor={(item, index) => `key-${index}`}
  ListHeaderComponent={() => (
    <View>
    <View style={styles.TrainerContainer}>
       <FlatList
  data={props.data}
  numColumns={2}
  renderItem={({ item }) => {
    return (
     <View style={styles.view}>
       <TouchableOpacity style={[styles.trainerFlatlist,{
      borderColor: state === item ? '#ccc' :"#fff", borderWidth:1
       }]} onPress={() => setState(item)}>
        <View>
        <Text style={styles.trainerName}>{item.name}</Text>
        <Text style={styles.nametext}>{item.nameText}</Text>
        </View>

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
    </View>
   
  )}
  
  renderItem={({ item, index}) => (
    <>
    </>
  )}
/>

    
  )
}

export default Training