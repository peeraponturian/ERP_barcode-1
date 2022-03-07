// Library
import React from 'react';
// Framework
import { Text, View } from 'react-native';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
// Style
import { cardStyle } from '../../styles/componentStyle/menu/menuCardStyle';

const CardData = ({ item }) => {
	return (
		<View style={cardStyle.viewLayoutCard}>
			<View style={cardStyle.viewFirstRow}>
				<Text style={cardStyle.textType}>ประเภท : </Text>
				<Text style={cardStyle.textSubType}>ใบสั่งขาย</Text>
				<View style={cardStyle.viewStatus}>
					<View>
                        {item.picking_status == 1 ? (<Text style={[cardStyle.textStatus,{color: '#1E90FF'}]}>รอดำเนินการ</Text>) : null}
					</View>

					<View>
						{item.picking_status == 2 ? (<Text style={[cardStyle.textStatus,{color: '#FF0000'}]}>กำลังดำเนินการ</Text>) : null}
					</View>

					<View>
						{item.picking_status == 6 ? (<Text style={[cardStyle.textStatus,{color: '#FF8C00'}]}>พักใบงาน</Text>) : null}
					</View>

					<View>
						{item.picking_status == 8 ? (<Text style={[cardStyle.textStatus,{color: '#006400'}]}>เสร็จแล้ว</Text>) : null}
					</View>

					<View>
						{item.picking_status == 9 ? (<Text style={[cardStyle.textStatus,{color: '#8B0000'}]}>ยกเลิก</Text>) : null}
					</View>
				</View>
			</View>

			<View style={cardStyle.viewSecondRow}>
				<View style={cardStyle.viewIcon}>
					<FontAwesomeIcon icon={faClipboardList} color={'orange'} size={25} />
				</View>

				<View style={cardStyle.viewDocument}>
					<Text style={cardStyle.textDocument}>{item.document}</Text>
				</View>

				<View style={cardStyle.viewSubStatus}>
					<View>
						{item.docuStatus == 'N' ? (<Text style={[cardStyle.textSubStatus,{color: '#7CFC00'}]}>N</Text>) : null}
					</View>

					<View>
						{item.docuStatus == 'P' ? (<Text style={[cardStyle.textSubStatus,{color: '#FFD700'}]}>P</Text>) : null}
					</View>

					<View>
						{item.docuStatus == 'Y' ? (<Text style={[cardStyle.textSubStatus,{color: '#F08080'}]}>A</Text>) : null}
					</View>
				</View>
			</View>

			<View style={cardStyle.viewThirdRow}>
				<View>
					<Text style={cardStyle.textDate}>วันที่เอกสาร :</Text>
				</View>

				<View style={cardStyle.viewDate}>
					<Text style={cardStyle.textSubDate}>{item.picking_date}</Text>
				</View>
			</View>

			<View style={cardStyle.viewFourthRow}>
				<View>
					<Text style={cardStyle.textRemark}>ลูกค้า :</Text>
				</View>

				<View style={cardStyle.viewRemark}>
					<Text style={cardStyle.textSubRemark}>{item.remark}</Text>
				</View>
			</View>
		</View>
	);
};
export default CardData;
