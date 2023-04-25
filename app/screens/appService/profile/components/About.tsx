import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import strings from '../../../../components/locales'
import { ScrollView } from 'react-native'

const About = () => {
  return (
    <ScrollView>
      <Text style={styles.about}>{strings.about}</Text>
      <View style={styles.aboutContainer}>
        <View>
        <Text>
            {strings.BirthDate}
        </Text>
        <Text style={styles.date}>
            {strings.date1}
        </Text>
        </View>
        <View>
        <Text>
            {strings.gender}
        </Text>
        <Text style={styles.date}>
            {strings.male}
        </Text>
        </View>
      </View>
      <View>
        <View style={styles.locationContainer}>
            <Text style={styles.location}>{strings.location}</Text>
            <Text style={styles.place}>{strings.locationPlace}</Text>
            <Text style={styles.location}>{strings.height}</Text>
            <Text style={styles.place}>{strings.heightNumber}</Text>
            <Text style={styles.location}>{strings.weight}</Text>
            <Text style={styles.place}>{strings.weightNumber}</Text>
            <Text style={styles.school}>{strings.school}</Text>
            <Text style={styles.location}>{strings.highschool}</Text>
            <Text style={styles.place}>{strings.schoolName}</Text>
            <Text style={styles.location}>{strings.graduation}</Text>
            <Text style={styles.place}>{strings.graduationYear}</Text>
            <Text style={styles.location}>{strings.GPA}</Text>
            <Text style={styles.place}>{strings.gpanumber}</Text>

        </View>
      </View>
    </ScrollView>
  )
}

export default About