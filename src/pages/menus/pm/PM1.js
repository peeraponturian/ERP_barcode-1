// Library
import React from "react";
// Framework
import { Text, View } from "react-native";
import axios from "axios";
// Component
import HeadbarCpn from "../../../components/headbar/headbarCpn";
import Datalist from "../../../components/datalistCpn";
// Icon

// Style

const baseUrl = 'http://192.168.1.25/';
const kettype = { "picking_type": "pms" };
const url = `${ baseUrl }erp_barcode/backend/picking/get_hd`;

export default class PM1 extends React.Component {
  state = {
    persons: {}
  }
// lifecycle
  componentDidMount() {
    axios.post( url, kettype )
      .then(res => {
        const persons = res.data.data.items;
        this.setState({ persons });
        // console.log( persons )
      })
  }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <HeadbarCpn
            onPressDetail={ () => this.props.navigation.navigate( "Detail" ) }
            onPressGoBack={ () => this.props.navigation.goBack() }
            onPressUser={ () => this.props.navigation.navigate( "Profile" ) }
            Title={ "รับสินค้า" }
          />
            <View style={{ height: 650 }}>
              <Datalist dataObject={this.state.persons}/>
            </View>
        </View>
      );
    }
  }