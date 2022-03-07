// Library
import React from 'react';
// Framework
import { Text, View } from 'react-native';
// Style
import { datalistModalStyle } from '../../styles/modal/datalistModalStyle';

const menuFlatlistCpn = ({ item }) => {
	return (
		<View style={datalistModalStyle.viewFLCard}>
            <View>
                <Text style={datalistModalStyle.textTitle}>
                    {item.picking_product_name}
                </Text>
            </View>

            <View style={datalistModalStyle.viewQuantity}>
                <View>
                    <Text style={datalistModalStyle.textActual}>จำนวน:</Text>
                </View>

                <View style={datalistModalStyle.viewNumber}>
                    <Text style={datalistModalStyle.textProductLogsQty}>
                        {item.product_logs_qty}
                    </Text>
                </View>

                <View>
                    <Text style={datalistModalStyle.textRequestQty}>
                        /{item.request_qty}
                    </Text>
                </View>

                <View style={{ marginLeft: 10 }}>
                    <Text style={datalistModalStyle.textPickingProductUnit}>
                        {item.picking_product_unit}
                    </Text>
                </View>
            </View>
        </View>
	);
};
export default menuFlatlistCpn;