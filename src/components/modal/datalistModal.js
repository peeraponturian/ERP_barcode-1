// Library
import React, { useState, useEffect } from 'react';
// Framework
import {
	ScrollView,
	Text,
	View
} from 'react-native';
import axios from 'axios';
// Style


const datalistModal = ({ inputDocument,inputRemark,inputPickingDate }) => {
    return(
        <View>
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        color: '#5787A4',
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 10,
                        marginTop: 10,
                        paddingRight: 255,
                        textAlign: 'center'
                    }}
                >
                    รายละเอียด
                </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View
                    style={{
                        height: 30,
                        marginBottom: 5,
                        marginTop: 5,
                        width: 100
                    }}
                >
                    <Text
                        style={{
                            color: '#5787A4',
                            fontWeight: 'bold',
                            padding: 3
                        }}
                    >
                        เลขที่เอกสาร
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: '#fff',
                        borderColor: '#D3D3D3',
                        borderWidth: 1,
                        height: 30,
                        marginBottom: 5,
                        marginTop: 5,
                        width: 240
                    }}
                >
                    <Text
                        style={{
                            color: '#5787A4',
                            justifyContent: 'center',
                            padding: 3,
                            textAlign: 'center'
                        }}
                    >
                        {inputDocument}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View
                    style={{
                        height: 30,
                        marginBottom: 5,
                        marginTop: 5,
                        width: 100
                    }}
                >
                    <Text
                        style={{
                            color: '#5787A4',
                            fontWeight: 'bold',
                            padding: 3
                        }}
                    >
                        ใบสั่งซื้อ
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: '#fff',
                        borderColor: '#D3D3D3',
                        borderWidth: 1,
                        height: 30,
                        marginBottom: 5,
                        marginTop: 5,
                        width: 240
                    }}
                >
                    <Text
                        style={{
                            color: '#5787A4',
                            justifyContent: 'center',
                            padding: 3,
                            textAlign: 'center'
                        }}
                    >
                        {inputDocument}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: 340 }}>
                <View
                    style={{
                        height: 30,
                        marginBottom: 5,
                        marginTop: 5,
                        width: 100
                    }}
                >
                    <Text
                        style={{
                            color: '#5787A4',
                            fontWeight: 'bold',
                            padding: 3
                        }}
                    >
                        ผู้ขาย
                    </Text>
                </View>
                <ScrollView
                    style={{
                        backgroundColor: '#fff',
                        borderColor: '#D3D3D3',
                        borderWidth: 1,
                        height: 30,
                        marginBottom: 5,
                        marginTop: 5,
                        width: 100
                    }}
                >
                    <Text
                        style={{
                            color: '#5787A4',
                            justifyContent: 'center',
                            padding: 3,
                            textAlign: 'center'
                        }}
                    >
                        {inputRemark}
                    </Text>
                </ScrollView>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <View
                    style={{
                        height: 30,
                        marginBottom: 5,
                        marginTop: 5,
                        width: 100
                    }}
                >
                    <Text
                        style={{
                            color: '#5787A4',
                            fontWeight: 'bold',
                            padding: 3
                        }}
                    >
                        วันที่เอกสาร
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: '#fff',
                        borderColor: '#D3D3D3',
                        borderWidth: 1,
                        height: 30,
                        marginBottom: 5,
                        marginTop: 5,
                        width: 240
                    }}
                >
                    <Text
                        style={{
                            color: '#5787A4',
                            justifyContent: 'center',
                            padding: 3,
                            textAlign: 'center'
                        }}
                    >
                        {inputPickingDate}
                    </Text>
                </View>
            </View>
        </View>
    )
}
export default datalistModal;