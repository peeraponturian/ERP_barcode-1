// Library
import React from "react";
// Framework
import { Modal, Text, TouchableOpacity, View } from "react-native";
// Component
import HeadbarDetail from "../components/headbar/headbarProfileCpn";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
// Style
import { profileStyle } from "../styles/profileStyle";
// import { MenuStyles } from "../Style/MenuGlobal";
// import { PopupCancel } from "../Style/MenuPage/PopupCancel";

export default class Profile extends React.Component {
  render() {
    return (
      <View>
      <HeadbarDetail onPressInformation={ () => this.props.navigation.goBack() }/>
        <View style={ profileStyle.heading }>
            <FontAwesomeIcon icon={ faUserCircle } size={ 100 } color={ "rgba(0,0,0,0.5)" }/>
        </View>

        <View style={ profileStyle.view }>
          <View style={ profileStyle.viewRigth }>
            <Text style={ profileStyle.textTitle }>ชื่อผู้ใช้</Text>
          </View>

          <View style={ profileStyle.viewCenter }>
            <Text style={ profileStyle.text }> นายเอกวิทย์ บุญบำเทิง </Text>
          </View>

          <View style={ profileStyle.viewLeft }>
            <FontAwesomeIcon icon={ faAngleRight }/>
          </View>
        </View>

        <View style={ profileStyle.view }>
          <View style={ profileStyle.viewRigth }>
            <Text style={ profileStyle.textTitle }>เพศ</Text>
          </View>

          <View style={ profileStyle.viewCenter }>
            <Text style={ profileStyle.text }> ชาย </Text>
          </View>

          <View style={ profileStyle.viewLeft }>
          <FontAwesomeIcon icon={ faAngleRight }/>
          </View>
        </View>

        <View style={ profileStyle.view }>
          <View style={ profileStyle.viewRigth }>
            <Text style={ profileStyle.textTitle }>วันเกิด</Text>
          </View>

          <View style={ profileStyle.viewCenter }>
            <Text style={ profileStyle.text }> 08-09-2535 </Text>
          </View>

          <View style={ profileStyle.viewLeft }>
          <FontAwesomeIcon icon={ faAngleRight }/>
          </View>
        </View>

        <View style={ profileStyle.view }>
          <View style={ profileStyle.viewRigth }>
            <Text style={ profileStyle.textTitle }>โทรศัพท์</Text>
          </View>

          <View style={ profileStyle.viewCenter }>
            <Text style={ profileStyle.text }> ********95 </Text>
          </View>

          <View style={ profileStyle.viewLeft }>
          <FontAwesomeIcon icon={ faAngleRight }/>
          </View>
        </View>

        <View style={ profileStyle.view }>
          <View style={ profileStyle.viewRigth }>
            <Text style={ profileStyle.textTitle }>E-mail</Text>
          </View>

          <View style={ profileStyle.viewCenter }>
            <Text style={ profileStyle.text }>Gonkkak.Jang@miccell.com</Text>
          </View>

          <View style={ profileStyle.viewLeft }>
          <FontAwesomeIcon icon={ faAngleRight }/>
          </View>
        </View>

        <View style={ profileStyle.view }>
          <View style={ profileStyle.viewRigth }>
            <Text style={ profileStyle.textTitle }>เปลี่ยนรหัสผ่าน</Text>
          </View>

          <View style={ profileStyle.viewCenter }>
            <Text style={ profileStyle.text }> ***** </Text>
          </View>
          
          <View style={ profileStyle.viewLeft }>
          <FontAwesomeIcon icon={ faAngleRight }/>
          </View>
        </View>

        <View style={{ alignSelf:"center" }}>
          <TouchableOpacity
            onPress={ () => onPressPopupCancelOpen() }
            style={{ alignItems:"center", borderColor:"#5787A4", borderRadius:5, borderWidth:1, marginTop:100, width: 150 }}
          >
            <Text >ออกจากระบบ</Text>
            {/* style={MenuStyles.textButtonPopupPage} */}
          </TouchableOpacity>
        </View>

        {/* <View style={{ alignItems:"center" }}>
          <Button onPress={() => navigation.navigate("Home")}/>
        </View> */}

      {/* Start PopupCancel */}
      {/* <Modal
        animationType="none"
        transparent={true}
        visible={isModalVisiblePopupCancel}
        onRequestClose={() => setModalVisiblePopupCancel(false)}
      >
        <View style={PopupCancel.centeredViewBackground}>
          <StatusBar style="dark" backgroundColor="rgba(0,0,0,0.5)" />
          <View style={[PopupCancel.modalView, { flexDirection: "column" }]}>
            <View style={{ marginTop: 5, }}>
              <FontAwesomeIcon icon={ faExclamationCircle } style={PopupCancel.iconPopup} size={ 75 } color={ 'orange' } />
            </View>
            <View style={{ marginTop: 5, }}>
              <Text style={PopupCancel.textTitle}>คำเตือน</Text>
            </View>
            <View style={{ marginTop: 5, }}>
              <Text style={PopupCancel.text}>คุณต้องการ"ออกจากระบบ"ใช่หรือไม่</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <TouchableOpacity style={PopupCancel.viewSave}>
                  <Button onPress={() => navigation.navigate("Home")}/>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => onPressPopupCancelClose()}
                  style={PopupCancel.viewClose}
                >
                  <Text style={PopupCancel.textSaveCancel}>ยกเลิก</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal> */}
      {/* End PopupCancel */}
    </View>
    );
  }
}