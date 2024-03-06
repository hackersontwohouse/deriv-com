import React from 'react'
import { ctrader_manage_data } from './ctrader-manage-data'
import CtraderManage from './ctrader-manage'
import { BuildVariantType } from 'features/types'

const Cashier = ({ region }: BuildVariantType) => {
    const { title, button_url, paragraph, button_text } = ctrader_manage_data.cashier
    return (
        <CtraderManage
            title={title}
            button_url={button_url}
            paragraph={paragraph}
            button_text={button_text}
            region={region}
        />
    )
}
export default Cashier
