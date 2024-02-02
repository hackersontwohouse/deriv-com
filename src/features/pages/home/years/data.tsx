import React from 'react'
import { CardContent } from '@deriv-com/components'
import {
    DerivLightDependableIcon,
    DerivLightSafeAndSecureIcon,
    DerivLightRegulatedIcon,
    DerivLightTwentyFourSevenSupportIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Illustration'
import { Localize } from 'components/localization'

export const cards: CardContent[] = [
    {
        id: 1,
        header: <Localize translate_text="_t_Dependable_t_" />,
        description: (
            <Localize translate_text="_t_Our 99.97% uptime ensures your uninterrupted access to the markets._t_" />
        ),
        size: 'md',
        color: 'gray',
        align: 'center',
        icon: (
            <DerivLightDependableIcon
                width={120}
                height={145}
                role="img"
                title="Dependable platform"
            />
        ),
        className: 'h-full',
    },
    {
        id: 2,
        header: <Localize translate_text="_t_Safe and Secure_t_" />,
        description: <Localize translate_text="_t_We keep your personal data and funds safe._t_" />,
        size: 'md',
        color: 'gray',
        align: 'center',
        icon: (
            <DerivLightSafeAndSecureIcon
                width={120}
                height={145}
                role="img"
                title="Safe and secure platform"
            />
        ),
        className: 'h-full',
    },
    {
        id: 3,
        header: <Localize translate_text="_t_Regulated_t_" />,
        description: (
            <Localize translate_text="_t_We’re regulated and licensed by global financial authorities._t_" />
        ),
        size: 'md',
        color: 'gray',
        align: 'center',
        icon: (
            <DerivLightRegulatedIcon
                width={120}
                height={145}
                role="img"
                title="Regulated and licenced broker"
            />
        ),
        className: 'h-full',
    },
    {
        id: 4,
        header: <Localize translate_text="_t_24/7 support_t_" />,
        description: (
            <Localize translate_text="_t_Our professional multilingual team is here for you anytime._t_" />
        ),
        size: 'md',
        color: 'gray',
        align: 'center',
        icon: (
            <DerivLightTwentyFourSevenSupportIcon
                width={120}
                height={145}
                role="img"
                title="24-hour chat support"
            />
        ),
        className: 'h-full',
    },
]
