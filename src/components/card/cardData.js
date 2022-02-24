// Library
import React from 'react';
// Framework
import { Text, View } from 'react-native';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
// Style
import { cardStyle } from '../../styles/card/cardStyle';

const CardData = ({ item }) => {
	return (
		<View style={ cardStyle.viewLayoutCard }>
			<View style={{ flexDirection: 'row',marginLeft: 5, marginTop: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 5 }}>ประเภท : </Text>
                <Text style={{ fontSize: 18, width: 150 }}>ใบสั่งขาย</Text>
                <View
                    style={{
                        alignSelf: 'flex-end',
                        alignItems: 'flex-end',
                        width: 210
                    }}
                >
                    <View>
                        {item.picking_status == 1 ? (
                            <Text
                                style={{
                                    color: '#1E90FF',
                                    fontWeight: 'bold',
                                    fontSize: 20
                                }}
                            >
                                รอดำเนินการ
                            </Text>
                        ) : null}
                    </View>
                    <View>
                        {item.picking_status == 2 ? (
                            <Text
                                style={{
                                    color: '#FF0000',
                                    fontWeight: 'bold',
                                    fontSize: 20
                                }}
                            >
                                กำลังดำเนินการ
                            </Text>
                        ) : null}
                    </View>
                    <View>
                        {item.picking_status == 6 ? (
                            <Text
                                style={{
                                    color: '#FF8C00',
                                    fontWeight: 'bold',
                                    fontSize: 20
                                }}
                            >
                                พักใบงาน
                            </Text>
                        ) : null}
                    </View>
                    <View>
                        {item.picking_status == 8 ? (
                            <Text
                                style={{
                                    color: '#006400',
                                    fontWeight: 'bold',
                                    fontSize: 20
                                }}
                            >
                                เสร็จแล้ว
                            </Text>
                        ) : null}
                    </View>
                    <View>
                        {item.picking_status == 9 ? (
                            <Text
                                style={{
                                    color: '#8B0000',
                                    fontWeight: 'bold',
                                    fontSize: 20
                                }}
                            >
                                ยกเลิก
                            </Text>
                        ) : null}
                    </View>
                </View>
			</View>

			<View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 5 }}>
				<View style={{ alignItems: 'center', alignSelf: 'center' }}>
					<FontAwesomeIcon icon={faClipboardList} color={'orange'} size={25} />
				</View>
				<View style={{ marginLeft: 15, width: 260 }}>
					<Text style={{ color: '#000', fontWeight: 'bold', fontSize: 22 }}>{item.document}</Text>
				</View>

				<View style={{ alignSelf: 'flex-end', alignItems: 'flex-end', width: 140 }}>
					<View>
						{item.docuStatus == 'N' ? (
							<Text
								style={{
									color: '#7CFC00',
									fontWeight: 'bold',
									fontSize: 20
								}}
							>
								N
							</Text>
						) : null}
					</View>
					<View>
						{item.docuStatus == 'P' ? (
							<Text
								style={{
									color: '#FFD700',
									fontWeight: 'bold',
									fontSize: 20
								}}
							>
								P
							</Text>
						) : null}
					</View>
					<View>
						{item.docuStatus == 'Y' ? (
							<Text
								style={{
									color: '#F08080',
									fontWeight: 'bold',
									fontSize: 20
								}}
							>
								A
							</Text>
						) : null}
					</View>
				</View>
			</View>

			<View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 5 }}>
				<View>
					<Text
						style={{
							color: 'rgba(0,0,0,0.5)',
							fontWeight: 'bold',
							fontSize: 18
						}}
					>
						วันที่เอกสาร :
					</Text>
				</View>

				<View style={{ marginLeft: 10 }}>
					<Text style={{ color: '#5787A4', fontSize: 18, fontWeight: 'bold' }}>{item.picking_date}</Text>
				</View>
			</View>

			<View
				style={{
					flexDirection: 'row',
					marginBottom: 10,
					marginLeft: 15,
					marginTop: 5
				}}
			>
				<View>
					<Text
						style={{
							color: 'rgba(0,0,0,0.5)',
							fontWeight: 'bold',
							fontSize: 18
						}}
					>
						ลูกค้า :
					</Text>
				</View>

				<View style={{ marginLeft: 10, width: 345 }}>
					<Text style={{ color: 'rgba(0,0,0,0.5)', fontSize: 18 }}>{item.remark}</Text>
				</View>
			</View>
		</View>
	);
};
export default CardData;
