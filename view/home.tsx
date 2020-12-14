import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card, CardItem, Container, Header, Icon, Right} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
export default function Home({navigation}) {
  return (
    <Container style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to. </Text>
      <Text style={styles.hometext}>Contakt</Text>
      <ScrollView>
        <View style={styles.card}>
          <Text>Categories</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Contact', {
                id: 12,
                category: 'Sports',
              });
            }}>
            <View style={styles.cardItem}>
              <CardItem>
                <Icon
                  type="FontAwesome"
                  name="futbol-o"
                  style={{color: 'green'}}
                />
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <Text style={styles.cardItemtext}>Sports</Text>
                  <Text style={styles.cardItemtext}>get contact</Text>
                </View>

                <Right>
                  <Icon type="Entypo" name="chevron-right" />
                </Right>
              </CardItem>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.cardItem}>
              <CardItem>
                <Icon
                  type="FontAwesome"
                  name="graduation-cap"
                  style={{color: 'green'}}
                />
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <Text style={styles.cardItemtext}>Education</Text>
                  <Text style={styles.cardItemtext}>get contact</Text>
                </View>

                <Right>
                  <Icon type="Entypo" name="chevron-right" />
                </Right>
              </CardItem>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.cardItem}>
              <CardItem>
                <Icon
                  type="FontAwesome"
                  name="hospital-o"
                  style={{color: 'green'}}
                />
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <Text style={styles.cardItemtext}>Health/Hospital</Text>
                  <Text style={styles.cardItemtext}>get contact</Text>
                </View>

                <Right>
                  <Icon type="Entypo" name="chevron-right" />
                </Right>
              </CardItem>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.cardItem}>
              <CardItem>
                <Icon
                  type="FontAwesome"
                  name="futbol-o"
                  style={{color: 'green'}}
                />
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <Text style={styles.cardItemtext}>Sports</Text>
                  <Text style={styles.cardItemtext}>get contact</Text>
                </View>

                <Right>
                  <Icon type="Entypo" name="chevron-right" />
                </Right>
              </CardItem>
            </View>
          </TouchableOpacity>
        </View>

        {/* end */}
      </ScrollView>
    </Container>
  );
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F9FF',
  },
  welcomeText: {
    fontSize: responsiveFontSize(3),
    paddingTop: responsiveHeight(10),
    paddingRight: responsiveWidth(4),
    textAlign: 'right',
  },
  hometext: {
    fontSize: responsiveFontSize(6),
    fontWeight: 'bold',
    color: '#4560AC',
    textAlign: 'right',
    paddingRight: responsiveWidth(4),
  },
  card: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    backgroundColor: 'white',
    marginBottom: 20,
    marginTop: responsiveHeight(10),
    borderRadius: 30,
    padding: 20,
    marginRight: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 6,
  },
  cardItem: {
    backgroundColor: '#FAFAFC',
    borderRadius: 12,
    marginTop: responsiveHeight(3),
  },
  cardItemtext: {
    color: '#885FB6',
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  category: {
    color: '#885FB6',
    paddingLeft: 5,
    fontSize: responsiveFontSize(2),
  },
});
