import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DetailsContent from '../components/Details/DetailsContent';
import DetailsHeader from '../components/Details/DetailsHeader';

const Details = ({route}) => {
  const {title, author, imageUrl, content} = route.params;
  return (
    <View style={styles.container}>
      <DetailsHeader imageUrl={imageUrl} />
      <DetailsContent content={content} title={title} author={author} />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
