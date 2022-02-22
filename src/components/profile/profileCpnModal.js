// Library
import React, { useState } from "react";
// Framework
import { Modal, Text, TouchableOpacity, View } from "react-native";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
// Style
import { profileStyle } from "../../styles/profileStyle";

const profileCpnProfile = ({ onPressHome }) => {
    const [ isModalVisiblePopupCancel, setModalVisiblePopupCancel ] = useState( false );
    // PopupCancelOpen
    const onPressPopupCancelOpen = () => {
        setModalVisiblePopupCancel( true )
    }
    // PopupCancelClose
    const onPressPopupCancelClose = () => {
        setModalVisiblePopupCancel( false );
    };
    return (
        <View>
            <View style={ profileStyle.viewButton }>
                <TouchableOpacity
                    onPress={ () => onPressPopupCancelOpen() }
                    style={ profileStyle.viewLogout }
                >
                    <Text style={ profileStyle.textLogout }>ออกจากระบบ</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="none"
                transparent={ true }
                visible={ isModalVisiblePopupCancel }
                onRequestClose={ () => setModalVisiblePopupCancel( false ) }
            >
                <View style={profileStyle.viewBackground}>
                    <View style={ profileStyle.viewModal }>
                        <View style={{ marginTop: 5 }}>
                            <FontAwesomeIcon icon={ faExclamationCircle } style={profileStyle.iconPopup} size={ 75 } color={ 'orange' } />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={ profileStyle.textTitle }>คำเตือน</Text>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={ profileStyle.textSubline }>คุณต้องการ"ออกจากระบบ"ใช่หรือไม่</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <TouchableOpacity style={ profileStyle.viewSave }>
                                    <View>
                                        <TouchableOpacity onPress={ onPressHome }>
                                            <Text style={ profileStyle.textConfirm }>ยืนยัน</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity
                                    onPress={ () => onPressPopupCancelClose() }
                                    style={ profileStyle.viewClose }
                                >
                                    <Text style={ profileStyle.textCancel }>ยกเลิก</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
export default profileCpnProfile;