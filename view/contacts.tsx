import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Platform} from 'react-native';
import {
  Card,
  CardItem,
  Container,
  Header,
  Icon,
  Input,
  Item,
  Right,
} from 'native-base';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {ContactActionSheet} from 'react-native-contact-action-sheet';
export default function Contacts({route, navigation}) {
  const {id, category} = route.params;
  const [visible, toggle] = useState(false);

  // Open Action Sheet
  const openActionSheet = () => {
    toggle((visible: boolean) => !visible);
  };
  const contacts = [
    {
      title: 'Company Headquarters',
      type: 'Phone Number',
      contact: '0784981685',
    },
    {
      title: 'Telesphore',
      type: 'Phone Number',
      contact: '0784981685',
    },
    {
      title: 'Telesphore',
      type: 'Message',
      contact: '0784981685',
    },
    {
      title: 'Telesphore',
      type: 'Email',
      contact: 'telesphore@idatech.rw',
    },
    {
      title: 'Website',
      type: 'Website',
      contact: 'https://www.idatech.rw',
    },
  ];
  return (
    <Container>
      <View style={styles.search}>
        <Item
          regular
          style={{
            borderRadius: 10,
            borderColor: '#D7CFEB',
            borderWidth: 0,
            backgroundColor: '#E0D6EC',
            height: 40,
          }}>
          <Input placeholder="search" />
        </Item>
      </View>

      <View style={styles.cardItem}>
        <TouchableOpacity onPress={() => openActionSheet()}>
          <CardItem>
            <View style={{flex: 1}}>
              <Image
                source={require('../assets/profile.jpg')}
                style={styles.rounded}
              />
            </View>
            <View style={{flex: 3, flexDirection: 'column'}}>
              <Text style={styles.cardItemtext}>Telesphore T</Text>
              <Text style={styles.category}>0784981685</Text>
              <Text style={styles.category}>telesphore@idatech.rw</Text>
            </View>

            <View style={{flex: 1}}>
              <Right>
                <Icon type="Entypo" name="phone" />
              </Right>
            </View>
          </CardItem>
        </TouchableOpacity>
      </View>
      <View style={styles.cardItem}>
        <TouchableOpacity onPress={() => openActionSheet()}>
          <CardItem>
            <View style={{flex: 1}}>
              <Image
                source={require('../assets/profile1.jpg')}
                style={styles.rounded}
              />
            </View>
            <View style={{flex: 3, flexDirection: 'column'}}>
              <Text style={styles.cardItemtext}>Telesphore T</Text>
              <Text style={styles.category}>0784981685</Text>
              <Text style={styles.category}>telesphore@idatech.rw</Text>
            </View>

            <View style={{flex: 1}}>
              <Right>
                <Icon type="Entypo" name="phone" />
              </Right>
            </View>
          </CardItem>
        </TouchableOpacity>
      </View>
      <View style={styles.cardItem}>
        <TouchableOpacity onPress={() => openActionSheet()}>
          <CardItem>
            <View style={{flex: 1}}>
              <Image
                source={require('../assets/profile.jpg')}
                style={styles.rounded}
              />
            </View>
            <View style={{flex: 3, flexDirection: 'column'}}>
              <Text style={styles.cardItemtext}>Telesphore T</Text>
              <Text style={styles.category}>0784981685</Text>
              <Text style={styles.category}>telesphore@idatech.rw</Text>
            </View>

            <View style={{flex: 1}}>
              <Right>
                <Icon type="Entypo" name="phone" />
              </Right>
            </View>
          </CardItem>
        </TouchableOpacity>
      </View>
      <View style={styles.cardItem}>
        <TouchableOpacity onPress={() => openActionSheet()}>
          <CardItem>
            <View style={{flex: 1}}>
              <Image
                source={require('../assets/profile1.jpg')}
                style={styles.rounded}
              />
            </View>
            <View style={{flex: 3, flexDirection: 'column'}}>
              <Text style={styles.cardItemtext}>Telesphore T</Text>
              <Text style={styles.category}>0784981685</Text>
              <Text style={styles.category}>telesphore@idatech.rw</Text>
            </View>

            <View style={{flex: 1}}>
              <Right>
                <Icon type="Entypo" name="phone" />
              </Right>
            </View>
          </CardItem>
        </TouchableOpacity>
      </View>

      <ContactActionSheet
        visible={visible}
        toggle={toggle}
        contactsList={contacts}
      />
    </Container>
  );
}

var styles = StyleSheet.create({
  search: {
    padding: responsiveWidth(2),
  },
  cardItemtext: {
    color: '#885FB6',
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  category: {
    color: '#885FB6',
    paddingLeft: 5,
    fontSize: responsiveFontSize(1.8),
  },
  cardItem: {
    backgroundColor: '#FAFAFC',
    borderRadius: 12,
    flex: 1,
  },
  rounded: {
    height: 40,
    width: 40,
    borderRadius: Platform.OS === 'ios' ? 40 / 2 : 40,
  },
});
